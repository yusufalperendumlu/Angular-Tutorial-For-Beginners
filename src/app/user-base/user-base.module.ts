import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from '../services/user.service';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent,
    UserDetailComponent,
  ],
  providers: [
    UserService
  ]
})
export class UserBaseModule { }
