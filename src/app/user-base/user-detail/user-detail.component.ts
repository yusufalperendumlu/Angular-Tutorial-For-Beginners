import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Users } from "src/app/models/users"
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterContentInit{
  @ContentChildren("contentRef") contentList: any;
  @Input()
  detail!: Users;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
    
  }

  ngAfterContentInit(): void {
    console.log(this.contentList);
  }

  ngOnInit(): void {
      
  }

  onRemove(): void {
    this.remove.emit(this.detail);
  }
}
