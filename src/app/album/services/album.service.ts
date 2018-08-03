import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import {IAlbum} from '../../shared/models/album.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumsUrl = environment.API_URL + '/albums';

  constructor(private http: HttpClient) { }
  getAllAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.albumsUrl);
  }
}
