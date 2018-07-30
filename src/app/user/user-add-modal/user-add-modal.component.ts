import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/services/user.model';
import { UserService } from '../../shared/services/user.service';
import { AlertService } from '../../shared/services/alert.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.scss']
})
export class UserAddModalComponent implements OnInit {
  user = new User();
  addUserForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.createAddUserForm();
  }
  addUser(form) {
    this.userService.createUser(form.value)
      .subscribe(result => {
        this.alert.success('User created!');
        this.activeModal.close();
      },
      (error) => {
        this.alert.error('Unexpected server error');
      });
  }
  private createAddUserForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      username: new FormControl(this.user.username, Validators.required),
      email: new FormControl(this.user.email, Validators.required)
    });
  }

}
