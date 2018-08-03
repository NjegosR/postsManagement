import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumsListComponent],
  exports: [
    AlbumsListComponent
  ]
})
export class AlbumModule { }
