import { Injectable } from '@angular/core';

import { RequestOptions, Http, Headers } from '@angular/Http';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

constructor(private http: Http) { }

connectLogin(data){



 
    let headers = new Headers();
      headers.append('Content-Type', 'application/json; charset=utf-8');
     let options = new RequestOptions({ headers: headers });
     return this.http.post('http://localhost:8080/projectdeveloper-app-aw/users/login',
     JSON.stringify({"email" : "hqDeveloper3@gmail.com","password" : "12345678"}),options)
     .subscribe(resp => {
     	  
     	    console.log(resp.headers.get('Authorization'));
     	    console.log(resp.headers.get('UserId'));
  
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

