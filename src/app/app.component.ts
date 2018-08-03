import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CommentsService} from './shared/services/comments.service';
import {Comment} from './shared/models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  isAlbums = false;
  comments$: Observable<Comment[]>;

  constructor(
    private commentService: CommentsService,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.comments$ = this.commentService.getAllComments();
    console.log(this.route.snapshot);
  }
  albumsClicked(e) {
    this.isAlbums = e;
  }
  }
