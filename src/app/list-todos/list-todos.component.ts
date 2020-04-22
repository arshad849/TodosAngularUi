import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date

  ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos : Todo[];
  message : string;
  // todos = [
  //   new Todo(1, 'complete the angular part today', true, new Date()),
  //   new Todo(2, 'become an expert in angular', false, new Date()),
  //   new Todo(3, 'We will defeat Corona', true, new Date())
  // ]
  constructor(private todoService : TodoDataService,
              private router : Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retreiveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }

  deleteTodo(id){
      this.todoService.deleteTodo('in28minutes', id).subscribe(
        response=>{
          console.log(response);
          this.message = `Succesfully Deleted Todo ${id}`;
          this.refreshTodos();
        }
      )
  }

  updateTodo(id){
    //console.log(`update ${id}`);
    this.router.navigate(['todo', id]);
  }

  addTodo(){
    this.router.navigate(['todo', -1]);
  }

}
