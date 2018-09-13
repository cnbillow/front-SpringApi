import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from '../../entity/user';
import { TestService } from '../../service/testService.service';
import { Test } from '../../entity/test';

import { Router } from '@angular/router';


@Component({
	selector: 'app-list-test',
	templateUrl: './list-test.component.html',
	styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {

	tests: Test[] = [];
	tests$: Observable<Test[]>;

	constructor(private user:User, 
		private testService:TestService, 
		private router: Router) { }

	ngOnInit() {

		$('.collapsible').collapsible({
			accordion : true
		});

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
