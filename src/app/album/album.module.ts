import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AlbumsListComponent, PhotosListComponent],
  exports: [
    AlbumsListComponent
  ]
})
export class AlbumModule { }
