import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = environment.API_URL + '/users';

  constructor(private http: HttpClient) { }

  getUserById(userId) {
    return this.http.get<User>(this.usersUrl + '/' + userId);
  }
}
