import { Injectable } from '@angular/core';
import { RequestOptions, Request, RequestMethod, Http, Headers, Response } from '@angular/Http';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  // connectLogin(data){

  // 	 console.log(data);

  // 	    // this.http.post("http://54.86.39.109:8080/project-app-ws/users", JSON.stringify(this.loginForm.value))
  //      //  .subscribe(dados => {
  //      //    console.log(dados);
  //      //   
  //      //   }, (Error: any) => alert(Error));

  // }

    // logar(usuario:User){
    connectLogin(data){


    	this.httpClient.post("http://54.86.39.109:8080/project-app-ws/users/login", {
          "email" : "hqdeveloper5@gmail.com",
          "password" : "12345678"
    	})
    	.subscribe(
    		(data:any) =>{
    		  console.log(data);


    		   }
    	    )





    // let headers = new Headers();
    //  headers.append('Content-Type', 'application/json');
    //  let options = new RequestOptions({ headers: headers });
    //  var response = this.http.post("http://54.86.39.109:8080/project-app-ws/users/login",
    //  JSON.stringify({"email" : "hqdeveloper5@gmail.com","password" : "12345678"}),options);

    //  console.log(options);





  //   let options = new RequestOptions({ headers: headers });
  //   var body = "email=" + data.email + "&password=" + data.password ;
  //   return new Promise((resolve) => {
  //     this.http.post("http://54.86.39.109:8080/project-app-ws/users/login", body,options).subscribe((data) => {
  //       if(data.json()) {

  //         // if(data.status != 200){
  //         //    this.texto = "login ou senha incorretos"
  //         //    this.mensagem(this.texto);
  //         // }
  //          console.log(data.status);
  //        // resolve(data.json());
  //       }else{
  //         console.log("Error");
  //       }
  //     }
  //   )
  // })

}



}

