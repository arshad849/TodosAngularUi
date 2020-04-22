import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  name = 'user';
  messageWS = '';
  constructor(
    private route : ActivatedRoute,
    private dataService : WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getMessageFromWS(){
   this.dataService.executeHelloWorldWebService().subscribe(
     response => this.handleResponse(response),
     error => this.handleError(error));
  }

  getMessagePathVariableFromWS(){
    this.dataService.executeHelloWorldPathVariableWebService(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error));
   }

  handleResponse(response){
    this.messageWS = response.message;
  }

  handleError(error){
    this.messageWS = error.error.message;
  }
}
