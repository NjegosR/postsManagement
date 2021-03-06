import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comment } from '../models/comment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsUrl = `${environment.API_URL}/comments`;

  constructor(private readonly http: HttpClient) {}

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }
  getCommentsForPost(postId) {
    return this.http.get<Comment[]>(this.commentsUrl + '/?postId=' + postId);
  }
}
