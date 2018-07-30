import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { UserListComponent } from './user/user-list/user-list.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: FullLayoutComponent,
//     children: [
//       {
//       path: '',
//       component: HomeComponent
//     },
//     {
//       path: 'posts',
//       component: PostListComponent
//     },
//     {
//       path: 'posts/:id/:userId',
//       component: PostDetailsComponent
//     },
//     {
//       path: 'users',
//       component: UserListComponent
//     }
//   ]
//   }
// ];
const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/:id/:userId',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
