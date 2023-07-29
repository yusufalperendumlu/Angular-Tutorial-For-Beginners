import { NgModule } from '@angular/core';
import { FormsModule}   from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-base/user-list/user-list.component';
import { UserBaseModule } from './user-base/user-base.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
