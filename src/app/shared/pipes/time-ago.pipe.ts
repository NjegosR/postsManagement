import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): any {
    const now = new Date();
    const result = (now.getTime() - value.getTime()) / 1000;


    let message: string;
    if (result < 45) {
      message = 'A few seconds ago!';
    } else if (result > 45 && result < 60) {
      message = '1 minutes ago!';
    } else if (result > 60 && result < 300) {
      message = 'Few minutes ago.';
    } else if (result > 1800 && result < 3600) {
      message = 'Less than an hour.';
    } else if (result > 3600 && result < 86400) {
      message = 'Less than a day ago.';
    } else if (result > 86400 && result < 31556926) {
      message = 'Few months ago.';
    } else {
      message = 'Few years ago.';
    }
    return message;
  }

}
