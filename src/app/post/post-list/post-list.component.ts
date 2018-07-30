import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostService } from '../../shared/services/post.service';
import { CommentsService } from '../../shared/services/comments.service';
import { Comment } from '../../shared/services/comment.model';
import { Post } from '../../shared/services/post.model';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  comments$: Observable<Comment[]>;
  title = 'Comments';

  constructor(
    private postService: PostService,
    private commentsService: CommentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPosts();
    this.comments$ = this.commentsService.getAllComments();
  }
  moreDetailsPage(post) {
    this.router.navigate(['posts/' + post.id + '/' + post.userId]);
  }

}
