import {ChangeDetectionStrategy, Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPost} from '../../../shared/models/post.model';
import {PostService} from '../../services/post.service';
import {Comment} from '../../../shared/models/comment.model';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';
import {CommentsService} from '../../../shared/services/comments.service';

import {Observable, Subscription} from 'rxjs';



@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  postID: number;
  userID: number;

  user$: Observable<User>;
  comments$: Observable<Comment[]>;
  post: IPost;
  sub: Subscription;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private commentsService: CommentsService,
    private postService: PostService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.postID = this.activatedRouter.snapshot.params['id'];
    this.sub = this.postService.getPostById(this.postID)
      .subscribe(result => {
        this.post = result;
        this.userID =  this.post.userId;
        this.user$ = this.userService.getUserById(this.userID);
      });
    this.comments$ = this.commentsService.getCommentsForPost(this.postID);

  }
  buttonClicked(titleChosen: string) {
    /*console.log(titleChosen);
    const titleArray = titleChosen.split(' ');
    let title = titleArray[0].toLocaleLowerCase();
    console.log(title);
    if (title === 'edit') {
      title += `/${this.postID}`;
    }*/
    this.router.navigateByUrl(`posts/edit/${this.postID}`);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
