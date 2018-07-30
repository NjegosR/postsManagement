import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Post } from '../../shared/models/post.model';
import { PostService } from '../../shared/services/post.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  addPostForm: FormGroup;
  post: Post;
  constructor(
    private postService: PostService,
    private alert: AlertService,
    private fb: FormBuilder
  ) {
    this.addPostForm = fb.group({
      'title': [null, Validators.required],
      'body': [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  addPost(form) {
    this.postService.createPost(form.value).subscribe(result => {
      this.alert.success('Post added!');
    },
    (error) => {
      this.alert.error('Unexpected server error');
    }
  );
  }
}
