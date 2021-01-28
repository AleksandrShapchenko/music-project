import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private albumNameSource = new BehaviorSubject<string>("");
  currentAlbumName = this.albumNameSource.asObservable();

  constructor() { }

  changeAlbumName(albumName: string) {
    this.albumNameSource.next(albumName);
    console.log(albumName);
    
  }
}
