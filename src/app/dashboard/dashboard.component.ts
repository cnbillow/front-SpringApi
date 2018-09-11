import { Component, OnInit , Input} from '@angular/core';

import {Observable} from 'rxjs';
import { User } from '../entity/user';
import { TestService } from '../service/testService.service';

import { Router } from '@angular/router';
import { Test } from '../entity/test';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {

  @Input() userName: String;
  tests: Test[] = [];
  tests$: Observable<Test[]>;

  constructor(private user:User, 
    private testService:TestService, private router: Router) { }

  ngOnInit() {

  	this.userName = String(this.user.firstName);

    $('.collapsible').collapsible({
      accordion : true
    });

       // this.testService.gerAllTests().subscribe(data => this.tests = data['body']); 
       // this.tests$ = this.testService.gerAllTests();
    this.testService.gerAllTests()
    .subscribe(data => 
    {
      if (data['_body'].length > 0) {
        let employee2 =  JSON.parse(data['_body']);
        for (var i = employee2.length - 1; i >= 0; i--) {
          this.tests.push(employee2[i]);
        }
      }

    }) 

  }

  updateTest(testid: Test){

     this.router.navigate(['updateTest/', testid,'update']);

  }




}
