import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  user: string;

  constructor() {
    this.user = "";
  }

  ngOnInit(): void {
    console.log('UserListComponent ngOnInit()');
    this.user = "";
  }
}

let testExample = 1;
