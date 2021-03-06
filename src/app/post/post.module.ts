import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddEditPostComponent} from './components/add-edit-post/add-edit-post.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';
import {AlertService} from '../shared/services/alert.service';
import {SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {UserDetailComponent} from './components/user-detail/user-detail.component';
import { ShowPostDetailsComponent } from './components/show-post-details/show-post-details.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AddEditPostComponent,
    PostDetailsComponent,
    PostListComponent,
    PostListItemComponent,
    UserDetailComponent,
    ShowPostDetailsComponent
  ],
  exports: [
    AddEditPostComponent,
    PostDetailsComponent,
    PostListComponent,
    PostListItemComponent,
    UserDetailComponent,
    ShowPostDetailsComponent
  ],
  providers: [
    AlertService
  ]
})
export class PostModule { }
