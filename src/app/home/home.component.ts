import { Component, OnInit } from '@angular/core';


import {FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 login: boolean;
 register: boolean;
 type: String;
  

  constructor() { }

  ngOnInit() {

  	  this.login = true;
  	  this.register = false;
  	
  }

  private checkClickButton(type){

       switch (type) {
       	case "register":
       		   this.login = false;
  	         this.register = true;
       		break;
       	case "login":
        		this.login = true;
  	        this.register = false;
     		break;
       	
       	default:
       		  this.login = true;
  	        this.register = false;
       		break;
       }
  }



}
