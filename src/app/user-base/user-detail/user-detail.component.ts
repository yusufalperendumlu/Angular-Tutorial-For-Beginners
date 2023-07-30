import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from "src/app/models/users"

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  @Input()
  detail!: Users;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  ngOnInit(): void {
      
  }

  onRemove(): void {
    this.remove.emit(this.detail);
  }
}
