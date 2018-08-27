import { Component, OnInit, Inject, Input} from '@angular/core';


import { Http } from '@angular/Http';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormBuilder],
})


export class RegisterComponent implements OnInit {

   registerForm : FormGroup;
   inconType : String;
   inputType : String;

  constructor(private formBuilder: FormBuilder,
               private http: Http) { }

  ngOnInit() {
     
  	this.registerForm = this.formBuilder.group({
  		'first_name' : [ null, Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(30)])],
      'last_name' : [ null, Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(30)])],
      'email' : [ null, Validators.compose([Validators.required,Validators.email])],
      'password' : [ null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(30)])],
      'password_confirm' : [ null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(30)])],

    });

    this.inconType = "visibility";
    this.inputType = "password";

  }

  onSubmit(){
   
    if(this.registerForm.valid) {
       this.http.post("http://54.86.39.109:8080/project-app-ws/users", JSON.stringify(this.registerForm.value))
        .subscribe(dados => {
          console.log(dados);
           this.reserForm();
         }, (Error: any) => alert(Error));

    }

       Object.keys(this.registerForm.controls).forEach(campo => {
       const input = this.registerForm.get(campo);
        input.markAsTouched();
      });

  }

  reserForm(){
    this.registerForm.reset();
  }

  hideOrShowPassWord(){
     if (this.inputType == 'password'){
          this.inputType = 'text';
          this.inconType = 'visibility_off';
     } else {
    
        this.inputType = 'password';
        this.inconType = 'visibility';
    }
     
  }
  
   applyCssError(input){

     return this.registerForm.get(input).touched && this.registerForm.get(input).errors;
 
  }






}
