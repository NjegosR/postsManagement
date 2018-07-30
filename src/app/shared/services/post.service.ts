import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = environment.API_URL + '/posts';

  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private postService: PostService,
    private alert: AlertService,
  ) { }


  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
  getPostById(postId) {
    return this.http.get<Post>(this.postsUrl + '/' + postId);
  }
  updatePost(id, body) {
    return this.http.post(this.postsUrl, body)
    .subscribe(result => {
      this.alertService.success('Post updated!');
    },
    (error) => {
      this.alertService.error('Unexpected server error');
    }
  );
  }

  createPost(body) {
    return this.http.post(this.postsUrl, body)
    .subscribe(result => {
      this.alert.success('Post added!');
    },
    (error) => {
      this.alert.error('Unexpected server error');
    }
  );
  }
}
