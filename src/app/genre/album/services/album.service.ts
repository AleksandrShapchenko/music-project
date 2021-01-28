import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { AlbumsResponse } from '../models/albums-response.interface';
import { AlbumHttpClientService } from './album-http-client.service';

@Injectable()
export class AlbumService {

  constructor(private http: AlbumHttpClientService) { }

  getAlbumsByGenre(genreName: string): Subscription {
    if(!localStorage.getItem(genreName)) {

      return this.http.getAlbumsByGenreFromAPI(genreName).subscribe(response => {
      localStorage.setItem(genreName, JSON.stringify(response));
      })

    } else {
      // return localStorage.getItem(genreName);
    }

  }
}
