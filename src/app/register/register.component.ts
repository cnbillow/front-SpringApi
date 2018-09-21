import { Component, OnInit, Inject, Input, ChangeDetectorRef} from '@angular/core';


import {FormBuilder, FormControl, FormGroup,Validators, AbstractControl} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthenticationService} from '../service/authentication.service';
import { User } from '../entity/user';


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
   showModal : boolean;
   @Input() msgError: String;

  constructor(private formBuilder: FormBuilder,
              private authetication:AuthenticationService,
              private user:User,
              private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
     
  	this.registerForm = this.formBuilder.group({
  		'first_Name' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(2),Validators.maxLength(20)])],
      'last_Name' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(2),Validators.maxLength(20)])],
      'email' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"),Validators.email])],
      'password' : [ null, Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(10)])],
      'password_confirm' : [ null, Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(10), this.passwordConfirming])],

    });

    this.inconType = "visibility";
    this.inputType = "password";


      this.authetication.showError.subscribe(
            show => this.showModal = show
       );

  }

  private ngAfterViewChecked() {
 
    this.cdRef.detectChanges();
  }

  
  private onSubmit(){
   
    if(this.registerForm.valid) {

         this.user.firstName = this.registerForm.get('first_Name').value.trim();
         this.user.lastName = this.registerForm.get('last_Name').value.trim();
         this.user.email = this.registerForm.get('email').value.trim();
         this.user.password = this.registerForm.get('password').value.trim();

         this.authetication.connectRegister(this.user);
  
    }

     Object.keys(this.registerForm.controls).forEach(campo => {
       const input = this.registerForm.get(campo);
        input.markAsTouched();
      });

  }

 
  private reserForm(){
    this.registerForm.reset();
  }

  
  private hideOrShowPassWord(){
     if (this.inputType == 'password'){
          this.inputType = 'text';
          this.inconType = 'visibility_off';
     } else {
    
        this.inputType = 'password';
        this.inconType = 'visibility';
    }
     
  }
  
 
  private applyCssError(input){

   const arrayErrors : Array<{}> = [
    {type: 'required', text: 'is required'},
    {type: 'email', text: 'is invalid!'},
    {type: 'minlength', text: 'minimum length is'},
    {type: 'maxlength', text: 'maximum length is '},
    {type: 'mismatch', text:  'Password mismatch'},
    ];

  if(this.registerForm.get(input).touched && this.registerForm.get(input).errors){
 
   for (var i = 0; i < arrayErrors.length; ++i) {   
        if(this.registerForm.get(input).hasError(String(arrayErrors[i]['type']))){ 
            if(this.registerForm.get(input).errors['minlength']){ 
               return this.msgError = input+' '+String(arrayErrors[i]['text'])+' '+String(this.registerForm.get(input).errors.minlength.requiredLength);
            }    
              return this.msgError = input+' '+String(arrayErrors[i]['text']);
        }
      }
    }
  
 
  }

 
  private passwordConfirming(c: FormGroup): any {

      if(!c.parent || !c) return;
        const pwd = c.parent.get('password').value;
        const cpwd= c.parent.get('password_confirm').value;
        return c.parent.get('password').value === c.parent.get('password_confirm').value ? null : { 'mismatch': true };
        
    }



}






