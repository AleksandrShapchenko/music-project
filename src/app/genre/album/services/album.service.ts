import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlbumsResponse } from '../models/albums-response.interface';

@Injectable()
export class AlbumService {
  baseApiURL = environment.baseApiURL;
  ATOKEN = environment.ATOKEN;

  constructor(private http: HttpClient) { }

  getAlbumsByGenre(genreName: String): Observable<AlbumsResponse> {
    return this.http.get<AlbumsResponse>(`${this.baseApiURL}?method=tag.gettopalbums&tag=${genreName}&api_key=${this.ATOKEN}&format=json`);
  }
}
