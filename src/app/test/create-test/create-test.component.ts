import { Component, OnInit } from '@angular/core';
import { Test } from '../../entity/test';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { TestService } from '../../service/testService.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

   createForm : FormGroup;
   tests: Test;
   
   constructor(private formBuilder: FormBuilder,
               private testService:TestService ) { }

  ngOnInit() {
    
     this.createForm = this.formBuilder.group({      
      'restaurant' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(2),Validators.maxLength(20)])],
      'amountPeople' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(1),Validators.maxLength(10)])],
      'dateAppoiment' : [ null ],
     });


     $('.datepicker').pickadate({
         min: true,
         today: 'Today',
         clear: 'Clear',
         closeOnSelect: false
     });

  }

      onSubmit(){

      if(this.createForm.valid) {
           this.tests = this.createForm.value;
           this.testService.createTest(this.tests);      
       }

        Object.keys(this.createForm.controls).forEach(campo => {
           const input = this.createForm.get(campo);
           input.markAsTouched();
        });

  }

   applyCssError(input){
     return this.createForm.get(input).touched && this.createForm.get(input).errors;
  }

}
