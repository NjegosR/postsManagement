import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../shared/services/post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../shared/services/alert.service';
import {IPost} from '../../shared/models/post.model';
import {Observable} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  addEditPostForm: FormGroup;
  post$: Observable<IPost>;
  isAdd: boolean;
  url: Observable<any[]>;
  postID: number;

  constructor(
    private  router: Router,
    private postService: PostService,
    private fb: FormBuilder,
    private alert: AlertService,
    private activatedRoute: ActivatedRoute
  ) {
    this.url = this.activatedRoute.url;
    this.url.forEach(item => {
      if (item[1].path === 'add') {
        this.isAdd = true;
      } else {
        this.isAdd = false;
        this.postID = item[2].path;
        this.post$ = this.postService.getPostById(this.postID);
      }
    });
  }

  ngOnInit() {
    this.addEditPostForm = this.fb.group({
      'title': [null, Validators.required],
      'body': [null, Validators.required]
    });
  }
  updatePost(form) {
    this.postService.updatePost(this.postID, form.value)
      .subscribe(result => {
        this.alert.success('Post updated!');
      }, (error) => {
        this.alert.error('Unexpectied server error!');
      });
    setTimeout(() => {
      this.router.navigateByUrl(`posts`);
    }, 1000);
  }
  addPost(form) {
    this.postService.createPost(form.value).subscribe(result => {
        this.alert.success('Post added!');
      },
      (error) => {
        this.alert.error('Unexpected server error!');
      }
    );
    setTimeout(() => {
      this.router.navigateByUrl(`posts`);
    }, 1000);
  }
  buttonClicked(title, form) {
    if (this.isAdd) {
      this.addPost(form);
    } else {
      this.updatePost(form);
    }
  }
}
