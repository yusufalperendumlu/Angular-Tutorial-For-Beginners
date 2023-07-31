import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Users } from '../models/users';
import { Observable } from 'rxjs';

const USER_API = 'http://localhost:3000/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {
  console.log(this.http);
  
}

getUser(id: number) {
  return this.http.get(`${USER_API}/1`);
}

getUsers() : Observable<Users[]> {
  return this.http.get<Users[]>(USER_API);
}




}
