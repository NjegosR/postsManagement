import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
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
}
