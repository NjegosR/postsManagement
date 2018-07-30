import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../shared/models/comment.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentsUrl = environment.API_URL + '/comments';

  constructor(
    private http: HttpClient
  ) { }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }
  getCommentsForPost(postId) {
    return this.http.get<Comment[]>(this.commentsUrl + '/?postId=' + postId);
  }
}
