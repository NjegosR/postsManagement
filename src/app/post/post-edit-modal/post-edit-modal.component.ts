import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../../shared/services/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../shared/services/post.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
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
    private activatedRouter: ActivatedRoute,
    private postService: PostService,
    private alertService: AlertService
  ) {
   }

  ngOnInit() {
    this.createPostForm();
  }
  updatePost(form) {
    this.postService.updatePost(this.postId, form.value)
    .subscribe(result => {
      this.alertService.success('Post updated!');
      this.activeModal.close();
    },
    (error) => {
      this.alertService.error('Unexpected server error');
      this.activeModal.close();
    }
  );
  }
  private createPostForm() {
    this.postForm = new FormGroup({
      post: new FormControl(this.body)
    });
  }

}
