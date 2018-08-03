import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from '../../../shared/models/user.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user: User;
}
