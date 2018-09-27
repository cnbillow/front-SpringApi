import { Component, OnInit, EventEmitter,Input, ViewChild, ElementRef,ChangeDetectorRef } from '@angular/core';
import { Test } from '../../entity/test';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup,Validators,FormsModule} from '@angular/forms';
import { TestService } from '../../service/testService.service';




@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

    createForm : FormGroup;
    tests: Test;
    dateTime: String;
    @ViewChild('date') myId: ElementRef;
    @Input() msgError: String;

  
   constructor(private formBuilder: FormBuilder,
               private testService:TestService,
               private cdRef:ChangeDetectorRef) { }

  ngOnInit() {

       var datte = new Date();
       this.dateTime = String(datte.getFullYear()+'/'+datte.getMonth()+'/'+datte.getDate());
   
     
     this.createForm = this.formBuilder.group({      
      'restaurant' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"), Validators.minLength(2),Validators.maxLength(20)])],
      'amountPeople' : [ null, Validators.compose([Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]"),Validators.pattern('[0-9]+[A-Z]?'), Validators.minLength(1),Validators.maxLength(10)])],
      'dateAppoiment' : [null, Validators.compose([Validators.required])]
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

   ngAfterViewChecked() {
 
    this.cdRef.detectChanges();
  }

   onSubmit(){

      if(this.createForm.valid) {   
           this.tests = this.createForm.value;
            this.tests.dateAppoiment = String(this.myId.nativeElement.textContent);
            if(this.tests.dateAppoiment === "")
                this.tests.dateAppoiment = this.dateTime;

           this.testService.createTest(this.tests);      
       }

        Object.keys(this.createForm.controls).forEach(campo => {
           const input = this.createForm.get(campo);
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
   if(this.createForm.get(input).touched && this.createForm.get(input).errors){
 
   for (var i = 0; i < arrayErrors.length; ++i) {   
        if(this.createForm.get(input).hasError(String(arrayErrors[i]['type']))){ 
            if(this.createForm.get(input).errors['minlength']){ 
               return this.msgError = input+' '+String(arrayErrors[i]['text'])+' '+String(this.createForm.get(input).errors.minlength.requiredLength);
            }    
              return this.msgError = input+' '+String(arrayErrors[i]['text']);
        }
      }
    }
  }

}
