import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../services/comment.model';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent implements OnInit {
  @Input() title: string;
  @Input() comments: Comment[];

  constructor() { }

  ngOnInit() {
  }
}
