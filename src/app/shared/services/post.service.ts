import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../services/post.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = environment.API_URL + '/posts';

  constructor(
    private _http: HttpClient
  ) { }


  getAllPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this.postsUrl);
  }
  getPostById(postId) {
    return this._http.get<Post>(this.postsUrl + '/' + postId);
  }
  updatePost(id, body) {
    return this._http.post(this.postsUrl, body);
  }
}
