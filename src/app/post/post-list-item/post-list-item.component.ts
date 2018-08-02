import {ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {IPost} from '../../shared/models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent {
  @Input() post: IPost;
}
