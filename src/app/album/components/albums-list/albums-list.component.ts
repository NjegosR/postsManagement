import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AlbumService} from '../../services/album.service';

import {IAlbum} from '../../../shared/models/album.model';

import {Observable} from 'rxjs';


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  albums$: Observable<IAlbum[]>;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums$ = this.albumService.getAllAlbums();
  }

}
