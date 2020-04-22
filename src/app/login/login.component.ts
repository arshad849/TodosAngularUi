import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router : Router,
              private authentication : HardCodedAuthenticationService,
              private basicAuthentication : BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    // if(this.username === 'user' && this.password === 'pass')
    if(this.authentication.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    }else{
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin(){
    // if(this.username === 'user' && this.password === 'pass')
    this.basicAuthentication.executeAuthenticationService(this.username, this.password).subscribe(
        data=>{
          console.log(data)
          this.invalidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error=>{
          console.log(error)
          this.invalidLogin = true
        }  
    )
      }

  handleJWTAuthLogin(){
        // if(this.username === 'user' && this.password === 'pass')
        this.basicAuthentication.executeJWTAuthenticationService(this.username, this.password).subscribe(
            data=>{
              console.log(data)
              this.invalidLogin = false;
              this.router.navigate(['welcome', this.username]);
            },
            error=>{
              console.log(error)
              this.invalidLogin = true
            }  
        )
          }

}
