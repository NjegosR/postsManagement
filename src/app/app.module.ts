import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostEditModalComponent } from './post/post-edit-modal/post-edit-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddModalComponent } from './user/user-add-modal/user-add-modal.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LatestCommentsComponent } from './shared/components/latest-comments/latest-comments.component';
import { PostAddComponent } from './post/post-add/post-add.component';

const toastrConfig = {
  timeOut: 2000
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    PostEditModalComponent,
    UserListComponent,
    UserAddModalComponent,
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(toastrConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [PostEditModalComponent, UserAddModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
