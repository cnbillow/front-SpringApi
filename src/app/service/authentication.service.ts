import { Injectable, EventEmitter } from '@angular/core';


import {Observable} from 'rxjs';
import { catchError , map} from 'rxjs/operators';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { RequestOptions, Http, Headers, Response} from '@angular/Http';
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
		return this.http.post('http://localhost:8080/project-app-ws/users/login',
			JSON.stringify({"email" : this.user.email,"password" : this.user.password}),options)
		.subscribe(resp => {

			this.user.token = resp.headers.get('Authorization');
			this.user.userId = resp.headers.get('UserId');
			this.user.firstName = resp.headers.get('FirstName');
			this.user.lastName = resp.headers.get('LastName');
			this.user.login = true;
			this.router.navigateByUrl('/listAppoitment');

		},(err) => {

			this.showError.emit(true);
		});

	}

	connectRegister(user:User){

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
			})
		};

		return this.httpClient.post<User>('http://localhost:8080/project-app-ws/users', user, httpOptions)
		.subscribe(resp => {
			this.connectLogin(this.user);
		},(err) => {
			this.showError.emit(true);
		});


	}


	statusUser(){
		return this.user.login;
	}








}

