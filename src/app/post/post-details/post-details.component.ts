import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../shared/services/post.model';
import { PostService } from '../../shared/services/post.service';
import { Comment } from '../../shared/services/comment.model';
import { CommentsService } from '../../shared/services/comments.service';
import { User } from '../../shared/services/user.model';
import { UserService } from '../../shared/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostEditModalComponent } from '../post-edit-modal/post-edit-modal.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  userId: number;
  post$: Observable<Post>;
  user$: Observable<User>;
  comments$: Observable<Comment[]>;
  commentsAll$: Observable<Comment[]>;
  title = 'Comments for this post';
  titleAllComments = 'Comments';

  constructor(
    private activatedRouter: ActivatedRoute,
    private postService: PostService,
    private commentsService: CommentsService,
    private userService: UserService,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.postId = this.activatedRouter.snapshot.params['id'];
    this.userId = this.activatedRouter.snapshot.params['userId'];
    this.post$ = this.postService.getPostById(this.postId);
    this.user$ = this.userService.getUserById(this.userId);
    this.comments$ = this.commentsService.getCommentsForPost(this.postId);
    this.commentsAll$ = this.commentsService.getAllComments();

  }
  editPost() {
    const modal = this.modal.open(PostEditModalComponent);
    modal.componentInstance.body = this.post$;
    modal.componentInstance.postId = this.postId;
  }

}
