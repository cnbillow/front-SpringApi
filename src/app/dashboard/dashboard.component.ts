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

  }

  goListTest() {
    // this.router.navigate(['listAppoitment']); 
      this.router.navigateByUrl('listAppoitment');

  }

 



}
