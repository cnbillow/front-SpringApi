import { Component, OnInit,Input,ChangeDetectorRef } from '@angular/core';
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
  @Input() msgError: String;

  constructor(private formBuilder: FormBuilder,
    private authetication:AuthenticationService,
    private user:User,
    private cdRef:ChangeDetectorRef) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({  		
      'email' : [ null, Validators.compose([Validators.required,Validators.email,Validators.pattern(".*\\S.*[a-zA-z0-9_-]")])],
      'password' : [ null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])],
    });

    this.showModal = false;
    this.inconType = "visibility";
    this.inputType = "password";

    this.authetication.showError.subscribe(
      show => this.showModal = show
      );
  }

  ngAfterViewChecked() {
 
    this.cdRef.detectChanges();
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

    const arrayErrors : Array<{}> = [
    {type: 'required', text: 'is required'},
    {type: 'email', text: 'is invalid!'},
    {type: 'minlength', text: 'minimum length is 6'},
    {type: 'maxlength', text: 'maximum length is 10'}
    ];

    if(this.loginForm.get(input).touched && this.loginForm.get(input).errors){


      for (var i = 0; i < arrayErrors.length; ++i) {   
        if(this.loginForm.get(input).hasError(String(arrayErrors[i]['type']))){
          return this.msgError = input+' '+String(arrayErrors[i]['text']);
        }  
      }
    }
  }


}
