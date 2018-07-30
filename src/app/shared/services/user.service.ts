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
    private _http: HttpClient
  ) { }

  getAllUsers() {
    return this._http.get<User[]>(this.usersUrl);
  }
  getUserById(userId) {
    return this._http.get<User>(this.usersUrl + '/' + userId);
  }
  createUser(body) {
    return this._http.post(this.usersUrl, body);
  }
}
