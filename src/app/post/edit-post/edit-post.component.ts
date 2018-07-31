import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {Post} from '../../shared/models/post.model';
import {PostService} from '../../shared/services/post.service';
import {AlertService} from '../../shared/services/alert.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  editPostForm: FormGroup;
  post: Post;

  postID: number;
  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.postID = this.activatedRoute.snapshot.params['postID'];
    this.editPostForm = this.fb.group({
      'title': [null, Validators.required],
      'post': [null, Validators.required]
    });
  }
  updatePost(editPostForm) {
    this.postService.updatePost(this.postID, this.editPostForm.value)
      .subscribe(result => {
        this.alert.success('Post updated!');
      }, (error) => {
        this.alert.error('Unexpectied server error!');
      });
  }
}
