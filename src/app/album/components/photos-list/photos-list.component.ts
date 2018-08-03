import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {IPhoto} from '../../../shared/models/photo.model';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  albumID: number;
  photos$: Observable<IPhoto[]>;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit() {
    this.albumID = this.route.snapshot.params['id'];
    if (this.albumID) {
      console.log(this.albumID);
      this.photos$ = this.photoService.getAllPhotosForAlbum(this.albumID);
    }
  }

}
