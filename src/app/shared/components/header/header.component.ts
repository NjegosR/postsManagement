import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() albums: string;
  @Output() path = new EventEmitter<boolean>();
}
