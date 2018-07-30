import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/services/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddModalComponent } from '../user-add-modal/user-add-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private _userService: UserService,
    private modal: NgbModal
  ) { }

  ngOnInit() {
    this.loadData();
  }
  private loadData() {
    this._userService.getAllUsers().subscribe(result => this.users = result);
  }
  addUser() {
    this.modal.open(UserAddModalComponent);
  }

}
