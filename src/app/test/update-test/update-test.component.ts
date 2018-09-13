import { Component, OnInit } from '@angular/core';
import { Test } from '../../entity/test';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { TestService } from '../../service/testService.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.css']
})
export class UpdateTestComponent implements OnInit {

	inscrition : Subscription;
  tests: Test;
  newtests: Test[] = [];
  updateForm : FormGroup;

  constructor( private activatedRoute: ActivatedRoute,
               private formBuilder: FormBuilder,
               private testService:TestService ) { }

  ngOnInit() {

    this.inscrition = this.activatedRoute.data.subscribe(
  	   	(info) => {
         this.tests = JSON.parse(info.obTest['_body']);
  	   	}
  		 );

    this.updateForm = this.formBuilder.group({      
      'restaurant' : [ this.tests.restaurant, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(2),Validators.maxLength(20)])],
      'amountPeople' : [ this.tests.amountPeople, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(1),Validators.maxLength(10)])],
      'dateAppoiment' : [ this.tests.dateAppoiment, Validators.compose([Validators.required])],
      'testId' : [ this.tests.testId]
     });


     $('.datepicker').pickadate({
         min: true,
         today: 'Today',
         clear: 'Clear',
         closeOnSelect: false
   });
     
      
  }

  ngOnDestroy(){
  	this.inscrition.unsubscribe();
  }

    onSubmit(){

      if(this.updateForm.valid) {
              
           // console.log(this.updateForm.value);
           this.tests = this.updateForm.value;
           this.testService.updateTest(this.tests);
         
          
          // this.user.email = this.loginForm.get('email').value.trim();
          // this.user.password = this.loginForm.get('password').value.trim();
          // this.authetication.connectLogin(this.user);

       }

        Object.keys(this.updateForm.controls).forEach(campo => {
           const input = this.updateForm.get(campo);
           input.markAsTouched();
        });

  }

   applyCssError(input){
     return this.updateForm.get(input).touched && this.updateForm.get(input).errors;
  }



  update(testid: Test){

  	console.log("here");
  
  }

}
