import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public _toastrService: ToastrService
  ) { }

  success(message, title?) {
    return this._toastrService.success(message, title);
  }
  error(message, title?) {
    return this._toastrService.error(message, title);
}
}
