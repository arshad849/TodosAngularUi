import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';

export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldWebService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080//hello-world-bean");
  }

  executeHelloWorldPathVariableWebService(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHeaders();
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }

  // createBasicAuthenticationHeaders(){
  //   let username = 'user';
  //   let password = 'password';
  //   let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthString;
  // }
}
