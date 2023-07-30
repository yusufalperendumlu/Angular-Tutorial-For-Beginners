import { Component, Input, OnInit } from '@angular/core';
import { Users } from "src/app/models/users"

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  @Input()
  detail!: Users;

  constructor() {
    
  }

  ngOnInit(): void {
      
  }
}
