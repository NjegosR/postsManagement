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
import { PostAddComponent } from './post/post-add/post-add.component';
import { SharedModule } from './shared/shared.module';

const toastrConfig = {
  timeOut: 2000
};

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    PostEditModalComponent,
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
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [PostEditModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
