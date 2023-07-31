import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewChecked{

  users!: Users[];

  @ViewChild('userRef') userRef!: ElementRef;
  
  constructor(private userService: UserService) {

    console.log(this.userRef);
    
  }

  ngAfterViewChecked(): void {
    console.log(this.userRef);
      
  }

  handleRemove(event: Users) {
    this.users = this.users.filter((user: Users) => {
      return user.id !== event.id;
    })
  }

  

  ngOnInit(): void {
     this.userService.getUsers().subscribe((data: Users[]) => {
      console.log(data);
      this.users = data;
     })
    
  }
}

