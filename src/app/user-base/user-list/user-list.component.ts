import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users!: Users[];
  
  constructor(private userService: UserService) {
  }

  handleRemove(event: Users) {
    this.users = this.users.filter((user: Users) => {
      return user.id !== event.id;
    })
  }

  ngOnInit(): void {
     this.users = this.userService.getUsers();
    
  }
}

