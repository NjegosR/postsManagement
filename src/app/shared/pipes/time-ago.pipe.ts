import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): any {
    const now = new Date();
    const result = (now.getTime() - value.getTime()) / 1000;
    const minute = 60;
    const hour = 3600;
    const day = hour * 24;
    const month = day * 30;
    const year = month * 12;

    let message: string;
    if (result < 45) {
      message = 'A few seconds ago!';
    } else if (result > 45 && result < minute) {
      message = '1 minutes ago!';
    } else if (result > minute && result < minute * 10) {
      message = 'Few minutes ago.';
    } else if (result > minute * 10 && result < hour) {
      message = 'Less than an hour.';
    } else if (result > hour && result < day) {
      message = 'Less than a day ago.';
    } else if (result > day && result < month) {
      message = Math.floor(result / day) + ' days ago.';
    } else if (result > month && result < year) {
      message = Math.floor(result / month) +  ' months ago.';
    } else {
      message = Math.floor(result / year) + ' years ago.';
    }
    return message;
  }

}
