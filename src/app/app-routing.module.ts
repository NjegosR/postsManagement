import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import {EditPostComponent} from './post/edit-post/edit-post.component';
import {PostAddComponent} from './post/post-add/post-add.component';


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
    component: PostAddComponent
  },
  {
    path: 'posts/edit/:postID',
    component: EditPostComponent
  },
  {
    path: 'posts/:id/:userId',
    component: PostDetailsComponent
  }
];

@NgModule({
imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
