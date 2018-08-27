import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.css']
})
export class ControlErrorsComponent implements OnInit {


  @Input() showError: boolean;
  @Input() msgError: String;

  constructor() { }

  ngOnInit() {
  }

}
