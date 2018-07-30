import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../services/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = environment.API_URL + '/users';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<User[]>(this.usersUrl);
  }
  getUserById(userId) {
    return this.http.get<User>(this.usersUrl + '/' + userId);
  }
  createUser(body) {
    return this.http.post(this.usersUrl, body);
  }
}
