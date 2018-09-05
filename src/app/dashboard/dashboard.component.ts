import { Component, OnInit , Input} from '@angular/core';

import { User } from '../entity/user';
import { TestService } from '../service/testService.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() userName: String;
  alltest : Subscription;

  constructor(private user:User, 
  	           private testService:TestService, private router: Router) { }

  ngOnInit() {
  	this.userName = String(this.user.firstName);
  	// this.testService.gerAllTests();

  	  this.alltest = this.router.events.subscribe((data) => {
           console.log(data);
      });
    
  }

  updateTest(){
     
  	// this.router.navigate();

  }




}
