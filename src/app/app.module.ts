import { NgModule } from '@angular/core';
import { FormsModule}   from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-base/user-list/user-list.component';
import { UserBaseModule } from './user-base/user-base.module';
import { UserTemplateFormComponent } from './user-base/user-template-form/user-template-form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UserBaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
