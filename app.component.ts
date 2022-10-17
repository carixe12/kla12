import { Component, VERSION } from '@angular/core';
import { todo } from '../../todo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  todos : todo [] = []
  newTodo : string;  
}

