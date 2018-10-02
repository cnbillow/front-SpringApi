import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';


import { User } from '../entity/user';
import { TestService } from '../service/testService.service';
import { Test } from '../entity/test';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  @Input() userName: String;

  constructor(public user:User, 
              private testService:TestService, 
              private router: Router) { }

  ngOnInit() {

  	this.userName = String(this.user.firstName);

     (<any>$(".button-collapse")).sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });


  }

  goListTest() {
    // this.router.navigate(['listAppoitment']); 
      this.router.navigateByUrl('listAppoitment');

  }

 



}
