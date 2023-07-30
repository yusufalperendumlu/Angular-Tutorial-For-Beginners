import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: Users[] = [{
    id: 1,
    name: "Alperen",
    age: 20,
    type: "Admin",
    isBool: false,
    isStylish: false,
  },
  {
    id: 2,
    name: "Atahan",
    age: 21,
    type: "User",
    isBool: true,
    isStylish: true,
  },
  {
    id: 3,
    name: "Harun",
    age: 26,
    type: "Senior",
    isBool: false,
    isStylish: true,
  },
  {
    id: 4,
    name: "Olgun",
    age: 22,
    type: "User",
    isBool: true,
    isStylish: false,
  },
]

  constructor() {
    
  }

  handleRemove(event: Users) {
    this.users = this.users.filter((user: Users) => {
      return user.id !== event.id;
    })
  }

  ngOnInit(): void {
    console.log('UserListComponent ngOnInit()');
    
  }
}

