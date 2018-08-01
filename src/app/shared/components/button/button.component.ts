import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string;
  @Input() disabled = false;

  @Output() titleChosen = new EventEmitter<string>();
}
