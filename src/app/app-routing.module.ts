import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import {AddEditPostComponent} from './post/add-edit-post/add-edit-post.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/add',
    component: AddEditPostComponent
  },
  {
    path: 'posts/edit/:postID',
    component: AddEditPostComponent
  },
  {
    // should be posts/:id - then in service where you get post subscribe on that result and then find user id
    path: 'posts/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
