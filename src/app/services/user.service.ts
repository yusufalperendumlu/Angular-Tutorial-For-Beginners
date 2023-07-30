import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

getUsers() : Users[] {
  return  [{
    id: 1,
    name: "Alperen",
    age: 20,
    type: "Admin",
    isBool: false,
    isStylish: false,
  },
  {
    id: 2,
    name: "Atahan",
    age: 21,
    type: "User",
    isBool: true,
    isStylish: true,
  },
  {
    id: 3,
    name: "Harun",
    age: 26,
    type: "Senior",
    isBool: false,
    isStylish: true,
  },
  {
    id: 4,
    name: "Olgun",
    age: 22,
    type: "User",
    isBool: true,
    isStylish: false,
  },
]
}

}
