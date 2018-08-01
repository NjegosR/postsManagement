import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {Comment} from '../../models/comment.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-latest-comments',
  templateUrl: './latest-comments.component.html',
  styleUrls: ['./latest-comments.component.scss']
})
export class LatestCommentsComponent {

  array = [];
  newComments: Comment[];

  @Input() title: string;

  @Input() set comments(data: Comment[]) {
    if (data) {
      this.newComments = data;

      this.newComments.forEach(comment => {

        this.array.push(
          {
            ...comment,
            date: this.randomDate(new Date(2017, 0, 1), new Date())
          }
        );
      });
      console.log(this.array);
    }
  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
