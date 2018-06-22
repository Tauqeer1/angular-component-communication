import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItem: any;
  save(todo: HTMLInputElement) {
    if (todo.value.trim() === '') {
      return;
    }
    this.todoItem = new String(todo.value);
    todo.value = '';
  }
}
