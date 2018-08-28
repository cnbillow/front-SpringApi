import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/Http';

import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder],
})
export class LoginComponent implements OnInit {

   loginForm : FormGroup;
   inconType : String;
   inputType : String;

    constructor(private formBuilder: FormBuilder,
                private authetication:AuthenticationService) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({  		
      'email' : [ null, Validators.compose([Validators.required,Validators.email,Validators.pattern(".*\\S.*[a-zA-z0-9_-]")])],
      'password' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(6),Validators.maxLength(30)])],
    });

      this.inconType = "visibility";
      this.inputType = "password";

  }

  onSubmit(){

  	  if(this.loginForm.valid) {     
          this.authetication.connectLogin(this.loginForm.value);
          this.reserForm();
       }



        Object.keys(this.loginForm.controls).forEach(campo => {
           const input = this.loginForm.get(campo);
           input.markAsTouched();
        });

  }

   reserForm(){
    this.loginForm.reset();
  }

   hideOrShowPassWord() {

     if (this.inputType == 'password'){
          this.inputType = 'text';
          this.inconType = 'visibility_off';
     } else {
    
        this.inputType = 'password';
        this.inconType = 'visibility';
    }
     
  }



  applyCssError(input){

  	 return this.loginForm.get(input).touched && this.loginForm.get(input).errors;
 
  }

}
