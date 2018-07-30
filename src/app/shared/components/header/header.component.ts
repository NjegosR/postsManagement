import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

}
