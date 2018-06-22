import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() set todoItem(item: string) {
    console.log('item', item);
    this.listItems.push(item);
  }
  listItems = [
    'A', 'b', 'c', 'd', 'e', 'f'
  ];
  constructor() {

  }

  ngOnInit() {
  }
}
