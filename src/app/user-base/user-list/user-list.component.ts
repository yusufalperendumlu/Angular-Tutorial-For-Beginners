import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, ViewChildren, ContentChildren, Renderer2 } from '@angular/core';
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

  @ViewChildren('userRef') userRef!: ElementRef;
  @ViewChild('userTh') userTh!: ElementRef;
  @ContentChildren(UserDetailComponent) contentList!: any;
  
  constructor(private userService: UserService, private renderer: Renderer2) {

    
    
  }

  ngAfterViewChecked(): void {
    console.log(this.userRef);
    this.userTh.nativeElement.innerText = "Name:"
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');
      
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.userTh.nativeElement, div);
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
    });
  }
}

