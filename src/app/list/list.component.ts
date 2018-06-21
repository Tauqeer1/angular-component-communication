import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todoItem: string;
  listItems = [
    'A', 'b', 'c', 'd', 'e', 'f'
  ];
  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.listItems.push(changes['todoItem'].currentValue)
  }
}
