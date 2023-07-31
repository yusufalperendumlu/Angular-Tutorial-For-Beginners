import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';

import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "", component: UserListComponent},
      { path: ":id", component: UserTemplateFormComponent}
    ]
  }
]

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserTemplateFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
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
