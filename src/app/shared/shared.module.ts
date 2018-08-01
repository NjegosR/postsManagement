import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LatestCommentsComponent } from './components/latest-comments/latest-comments.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './services/alert.service';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LatestCommentsComponent,
    CommentComponent,
  ],
  providers: [
    NgbActiveModal,
    AlertService
  ]
})
export class SharedModule { }
