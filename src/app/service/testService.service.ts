import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import { catchError , map} from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Http, Headers, Response} from '@angular/Http';
import { Router } from '@angular/router';
import { User } from '../entity/user';


@Injectable({
	providedIn: 'root'
})
export class TestService {

	showError = new EventEmitter<boolean>();

    constructor(private router:Router,
			    private http: Http,
			    private user:User) { }


    gerAllTests(){

    let headers = new Headers();
    headers.append('Authorization', String(this.user.token));
	headers.append('Content-Type', 'application/json');
	let options = new RequestOptions({ headers: headers });
	return this.http.get('http://localhost:8080/projectdeveloper-app-aw/test?page=0&limit=10',options)
    .subscribe(resp => {
	   	     console.log(resp.text());
	},(err) => {
    	 
    	   console.log(err);
    });

	}



}




