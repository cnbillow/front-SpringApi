import { Injectable, EventEmitter } from '@angular/core';


import {Observable,} from 'rxjs';
import { catchError , map} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Http, Headers } from '@angular/Http';
import { User } from '../entity/user';
import { ModalErrosComponent } from '../shared/modal-erros/modal-erros.component';

import { Router } from '@angular/router';




@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {


	showError = new EventEmitter<boolean>();

	constructor(private http: Http, 
	        	private user:User,
	        	private router:Router,
		        private httpClient: HttpClient) { }


connectLogin(user:User){
 
   let headers = new Headers();
   headers.append('Content-Type', 'application/json; charset=utf-8');
   let options = new RequestOptions({ headers: headers });
   return this.http.post('http://localhost:8080/projectdeveloper-app-aw/users/login',
   	JSON.stringify({"email" : this.user.email,"password" : this.user.password}),options)
   .subscribe(resp => {

   	this.user.token = resp.headers.get('Authorization');
   	this.user.userId = resp.headers.get('UserId');
   	this.user.login = true;
   	this.router.navigateByUrl('/dashboard');


   },(err) => {
    	console.log(this.user);
    	this.showError.emit(true);
   });


}

connectRegister(){

	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	let options = new RequestOptions({ headers: headers });
	return this.http.post('http://localhost:8080/projectdeveloper-app-aw/users',
		JSON.stringify(
		{
			"firstName":"angular",
			"lastName":"angular",
			"email":"angular@gmail.com",
			"password":"12345678",
			"addresses":[
			{
				"city":"Vancouver",
				"country":"Canada",
				"streetName":"123 Street fourth",
				"postalCode":"4ML 7VL",
				"type":"shipping",
				"phone":"6044405689"

			},{
				"city":"Vancouver",
				"country":"Canada",
				"streetName":"123 Street fourth",
				"postalCode":"4ML 7VL",
				"type":"billing",
				"phone":"6044405689"

			}
			]

		}

		),options).subscribe(resp => {

		console.log(resp);
	});

	}






}

