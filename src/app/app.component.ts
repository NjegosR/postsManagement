import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsService} from './shared/services/comments.service';
import {Comment} from './shared/models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
   comments$: Observable<Comment[]>;

  constructor(private commentService: CommentsService) {
  }
  ngOnInit() {
    this.comments$ = this.commentService.getAllComments();
  }
  }
