import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { IPhoto} from '../../shared/models/photo.model';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photosUrl = environment.API_URL + '/photos/?albumId=';
  constructor(private http: HttpClient) { }

  getAllPhotosForAlbum(id: number): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.photosUrl + id);
  }
}
