import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ControlErrorsComponent } from './control-errors/control-errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ControlErrorsComponent
  ],
  exports:[
     ControlErrorsComponent
  ]
})
export class SharedModule { }
