import { Component, OnInit,ViewChild, ElementRef, ChangeDetectorRef, Input} from '@angular/core';
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
  dateTime: String;
  @ViewChild('date') myId: ElementRef;
  @Input() msgError: String;

  updateForm : FormGroup;

  constructor( private activatedRoute: ActivatedRoute,
               private formBuilder: FormBuilder,
               private testService:TestService,
               private cdRef:ChangeDetectorRef ) { }

  ngOnInit() {

        var datte = new Date();
       this.dateTime = String(datte.getFullYear()+'/'+datte.getMonth()+'/'+datte.getDate());

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

     (<any>$(".datepicker")).pickadate({
         min: true,
         today: 'Today',
         closeOnSelect: false,
         formatSubmit: "yyyy-mm-dd",
         onSet: function() {    
              $("#date").html(this.get('select', 'yyyy-mm-dd'));
           },      
        });
     
      
  }

   ngOnDestroy(){
  	this.inscrition.unsubscribe();
  }

   ngAfterViewChecked() {
 
    this.cdRef.detectChanges();
  }

   onSubmit(){

      if(this.updateForm.valid) {
       
           this.tests = this.updateForm.value;
           this.tests.dateAppoiment = String(this.myId.nativeElement.textContent);
            if(this.tests.dateAppoiment === "")
                this.tests.dateAppoiment = this.dateTime;
              
            this.testService.updateTest(this.tests);      
       }

        Object.keys(this.updateForm.controls).forEach(campo => {
           const input = this.updateForm.get(campo);
           input.markAsTouched();
        });

  }

   applyCssError(input){
     
   const arrayErrors : Array<{}> = [
    {type: 'required', text: 'is required'},
    {type: 'pattern', text: 'is invalid!'},
    {type: 'minlength', text: 'minimum length is'},
    {type: 'maxlength', text: 'maximum length is'},

    ];
   if(this.updateForm.get(input).touched && this.updateForm.get(input).errors){
 
   for (var i = 0; i < arrayErrors.length; ++i) {   
        if(this.updateForm.get(input).hasError(String(arrayErrors[i]['type']))){ 
            if(this.updateForm.get(input).errors['minlength']){ 
               return this.msgError = input+' '+String(arrayErrors[i]['text'])+' '+String(this.updateForm.get(input).errors.minlength.requiredLength);
            }    
              return this.msgError = input+' '+String(arrayErrors[i]['text']);
        }
      }
    }
  }


}
