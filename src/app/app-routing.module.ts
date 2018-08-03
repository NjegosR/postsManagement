import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post/components/post-list/post-list.component';
import { PostDetailsComponent } from './post/components/post-details/post-details.component';
import {AddEditPostComponent} from './post/components/add-edit-post/add-edit-post.component';
import {AlbumsListComponent} from './album/components/albums-list/albums-list.component';


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
    path: 'posts/:id',
    component: PostDetailsComponent
  },
  {
    path: 'albums',
    component: AlbumsListComponent
  },
];

@NgModule({
imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
