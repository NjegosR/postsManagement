import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '[app-post-list-item]',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() title;
  @Input() body;
  @Input() postID;
  @Input() userID;
}
