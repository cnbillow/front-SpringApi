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


	gerAllTests(){

		let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.get('http://52.207.202.65:8080/project-app-ws/test?page=0&limit=25',options);

	}
	findTestById(testid: Test){

		let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.get('http://52.207.202.65:8080/project-app-ws/test/'+String(testid),options);

	}
	updateTest(test: Test){

 	let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.put('http://52.207.202.65:8080/project-app-ws/test/'+String(test.testId),
			JSON.stringify(
			{
				"restaurant": test.restaurant,
				"amountPeople": test.amountPeople,
				"dateAppoiment": test.dateAppoiment,
			}

			),options)
		.subscribe(resp => {
			this.router.navigateByUrl('/listAppoitment');
		},(err) => {
			this.showError.emit(true);
		});

	}

    createTest(test: Test){
    
    	let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.post('http://52.207.202.65:8080/project-app-ws/test',
			JSON.stringify(
			{
				"restaurant": test.restaurant,
				"amountPeople": test.amountPeople,
			    "dateAppoiment": test.dateAppoiment,
				
			}
			),options)
		.subscribe(resp => {
			this.router.navigateByUrl('/listAppoitment');
		},(err) => {
			this.showError.emit(true);
		});
    }
    removeTest(testid: Test) {

        let headers = new Headers();
		headers.append('Authorization', String(this.user.token));
		headers.append('Content-Type', 'application/json; charset=utf-8');
		let options = new RequestOptions({ headers: headers });
		return this.http.delete('http://52.207.202.65:8080/project-app-ws/test/'+String(testid),options)
		.subscribe(resp => {
			this.router.navigateByUrl('/createTestComponent');
		},(err) => {
			console.log(err);
			this.showError.emit(true);
		});

    }





}


