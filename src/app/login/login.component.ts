import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/Http';

import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';
import { User } from '../entity/user';
import { ModalErrosComponent } from '../shared/modal-erros/modal-erros.component';
import { ActivatedRoute } from '@angular/router';


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
   showModal : boolean;

    constructor(private formBuilder: FormBuilder,
                private authetication:AuthenticationService,
                private user:User) { }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({  		
      'email' : [ null, Validators.compose([Validators.required,Validators.email,Validators.pattern(".*\\S.*[a-zA-z0-9_-]")])],
      'password' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(6),Validators.maxLength(30)])],
    });
      
      this.showModal = false;
      this.inconType = "visibility";
      this.inputType = "password";

      this.authetication.showError.subscribe(
            show => this.showModal = show
        );
  }

  onSubmit(){

  	  if(this.loginForm.valid) {

          this.user.email = this.loginForm.get('email').value.trim();
          this.user.password = this.loginForm.get('password').value.trim();
          this.authetication.connectLogin(this.user);

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
