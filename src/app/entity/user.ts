import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class User {

  firstName : String;
  lastName : String;
  email : String;
  password : String;
  userId : String;
  token: String;
  login: boolean = false;


  // constructor( firstName? : String,lastName ?: String,email? : String, 
  // 	            password? : String, userId ?: String, login?: boolean, token?: String){
     
  //    this.firstName = firstName;
  //    this.lastName = lastName;
  //    this.email = email;
  //    this.password = password;
  //    this.login = false;
  //    this.token = token;
  //    this.userId = userId;

  // }


}
