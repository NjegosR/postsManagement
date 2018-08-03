import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {IPost} from '../../../shared/models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-show-post-details',
  templateUrl: './show-post-details.component.html',
  styleUrls: ['./show-post-details.component.scss']
})
export class ShowPostDetailsComponent {
  @Input() post: IPost;
}
