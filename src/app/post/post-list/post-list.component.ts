import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PostService } from '../../shared/services/post.service';
import { IPost } from '../../shared/models/post.model';

import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts$: Observable<IPost[]>;
  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.posts$ = this.postService.getAllPosts();
  }
}
