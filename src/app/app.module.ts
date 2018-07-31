import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { SharedModule } from './shared/shared.module';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostListItemComponent } from './post/post-list-item/post-list-item.component';

const toastrConfig = {
  timeOut: 2000
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    PostAddComponent,
    EditPostComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(toastrConfig),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
