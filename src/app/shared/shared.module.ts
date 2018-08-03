import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestCommentsComponent } from './components/latest-comments/latest-comments.component';
import { AlertService } from './services/alert.service';
import { CommentComponent } from './components/comment/comment.component';
import { ButtonComponent } from './components/button/button.component';
import {TimeAgoPipe} from './pipes/time-ago.pipe';
import { InputComponent } from './components/input/input.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent,
    ButtonComponent,
    TimeAgoPipe,
    InputComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent,
    ButtonComponent,
    InputComponent,
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
