import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {

  constructor(
    public toastrService: ToastrService
  ) { }

  success(message, title?) {
    return this.toastrService.success(message, title);
  }
  error(message, title?) {
    return this.toastrService.error(message, title);
  }

  tasks(arg: number, arg2: object, arg3?: string) {

    // @todo task
  }
}
