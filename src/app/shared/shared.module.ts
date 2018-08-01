import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestCommentsComponent } from './components/latest-comments/latest-comments.component';
import { AlertService } from './services/alert.service';
import { CommentComponent } from './components/comment/comment.component';
import { ButtonComponent } from './components/button/button.component';
import {TimeAgoPipe} from './pipes/time-ago.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent,
    ButtonComponent,
    TimeAgoPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent,
    ButtonComponent
  ],
  providers: [
    NgbActiveModal,
    AlertService
  ]
})
export class SharedModule { }
