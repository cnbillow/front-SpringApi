import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import { catchError , map} from 'rxjs/operators';
import { HttpClient, HttpRequest, HttpHeaders, HttpParams} from '@angular/common/http';
import { RequestOptions, Http, Headers, Response} from '@angular/Http';
import { Router } from '@angular/router';
import { User } from '../entity/user';
import { Test } from '../entity/test';


@Injectable({
	providedIn: 'root'
})
export class TestService {

	tests: Test[];
	showError = new EventEmitter<boolean>();

	constructor(private router:Router,
		private http: Http,
		private user:User,
		private httpClient: HttpClient) { }


	private myheaders(){
	  const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': String(this.user.token)
			})
		};
    	 return httpOptions;
	}


	gerAllTests(): Observable<Test> {
		return this.httpClient.get<Test>('http://localhost:8080/project-app-ws/test?page=0&limit=25', this.myheaders() );
	}
	findTestById(testid: Test){

		let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.get('http://localhost:8080/project-app-ws/test/'+String(testid),options);
	}
	updateTest (test: Test) {

		return this.httpClient.put<Test>('http://localhost:8080/project-app-ws/test/'+String(test.testId), test,  this.myheaders())
		.subscribe(resp => {
			this.router.navigateByUrl('/listAppoitment');
		},(err) => {
			this.showError.emit(true);
		});

	}

	createTest(test: Test){

		return this.httpClient.post<Test>('http://localhost:8080/project-app-ws/test', test, this.myheaders())
		.subscribe(resp => {
			this.router.navigateByUrl('/listAppoitment');
		},(err) => {
			this.showError.emit(true);
		});

	}

	removeTest(testid: Test) {

		return this.httpClient.delete('http://localhost:8080/project-app-ws/test/'+String(testid), this.myheaders())
		.subscribe(resp => {
			this.router.navigateByUrl('/createTestComponent');
		},(err) => {
			console.log(err);
			this.showError.emit(true);
		});

	}







}


