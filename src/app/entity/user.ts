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


}
