import { Component, OnInit , Input} from '@angular/core';

import { User } from '../entity/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() userName: String;

  constructor(private user:User) { }

  ngOnInit() {
  	this.userName = String(this.user.firstName);
  
  }

}
