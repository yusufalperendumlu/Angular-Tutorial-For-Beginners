import { Component, OnInit } from '@angular/core';
import { Users, UsersType } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css']
})
export class UserTemplateFormComponent implements OnInit {

  user!: Users;
  userType: UsersType[] =[{
    key: 0,
    value: 'Admin'
  },
  {
    key: 1,
    value: 'User'
  }
]
  constructor(private userService: UserService) { }

  toggleIsBool(object: any) {
    console.log(object);
  }
  

  ngOnInit() {
    this.userService.getUsers().subscribe((data: Users[]) => {
      console.log(data);
      this.user = data[1];
     })
  }

}