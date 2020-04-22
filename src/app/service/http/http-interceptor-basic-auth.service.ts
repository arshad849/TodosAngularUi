import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService : BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){

    // let username = 'user';
    // let password = 'password';
    // let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    
    let basicAuthString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if(basicAuthString && username){
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthString
        }
      })
  }
    return next.handle(request);
  }
}
