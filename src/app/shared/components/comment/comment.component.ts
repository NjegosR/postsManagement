import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {

  @Input() name: string;
  @Input() body: string;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
