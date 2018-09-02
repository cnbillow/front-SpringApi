
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-modal-erros',
  templateUrl: './modal-erros.component.html',
  styleUrls: ['./modal-erros.component.css']
})


export class ModalErrosComponent implements OnInit {

  @Input() msgError: String;
  modal : String;

 closeResult: string;

  constructor()  {  }

  ngOnInit() {
     
    
  }




}
