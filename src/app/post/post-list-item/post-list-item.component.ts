import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../shared/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title;
  @Input() body;
  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
