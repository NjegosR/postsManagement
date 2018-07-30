import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent {
  @Input() title: string;
  @Input() comments: Comment[];

}