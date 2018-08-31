
import { Component, OnInit, Input, EventEmitter } from '@angular/core';


import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
   
       $('.modal').modal();
       $('#modal1').modal('open');
       $('.trigger-modal').modal();
    
  }


tetste(){
  console.log("calll here ModalErrosComponent");
}
 


}
