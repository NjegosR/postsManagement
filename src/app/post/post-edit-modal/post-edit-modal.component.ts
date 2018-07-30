import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { Post } from '../../shared/models/post.model';
import { PostService } from '../../shared/services/post.service';
import { AlertService } from '../../shared/services/alert.service';

import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-post-edit-modal',
  templateUrl: './post-edit-modal.component.html',
  styleUrls: ['./post-edit-modal.component.scss']
})
export class PostEditModalComponent implements OnInit {
  postForm: FormGroup;

  @Input() body;
  @Input() postId;

  constructor(
    public activeModal: NgbActiveModal,
    private postService: PostService,
  ) {
   }

  ngOnInit() {
    this.postForm = new FormGroup({ post: new FormControl(this.body)});
  }
  updatePost(form) {
    this.postService.updatePost(this.postId, form.value);
    this.activeModal.close();
  }
}
