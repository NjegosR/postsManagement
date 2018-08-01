import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = environment.API_URL + '/posts';

  constructor(private http: HttpClient) {}


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostById(postId) {
    return this.http.get<Post>(this.postsUrl + '/' + postId);
  }

  updatePost(id, body) {

    return this.http.post(this.postsUrl, body);
  }

  createPost(body) {
    return this.http.post(this.postsUrl, body);
  }
}
