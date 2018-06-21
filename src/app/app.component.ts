import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoItem: string;
  save(todo: HTMLInputElement) {
    if (todo.value.trim() === '') {
      return;
    }
    this.todoItem = todo.value;
    todo.value = '';
  }
}
