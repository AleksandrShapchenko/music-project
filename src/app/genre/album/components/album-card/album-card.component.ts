import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../models/album.interface';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() genreName: string;
  @Input() album: Album;
  images: Image[];
  imgLarge: Image;
  imgLargeURL: String;

  isLiked = false;

  constructor() { }

  ngOnInit(): void {
    const rank = `${this.album['@attr'].rank}`;
    const localStorItemKey  = `${this.genreName}Liked`;
    const localStorItem = JSON.parse(localStorage.getItem(localStorItemKey));

    this.images = this.album.image;
    this.imgLarge = this.images.find(img => img.size === "large");

    this.imgLargeURL = `url('${this.imgLarge['#text']}')`;

    if(localStorItem.liked[rank] === true) {
      this.isLiked = true;
    }
  }

  toggleLikeAlbum() {
    const rank = `${this.album['@attr'].rank}`;
    const localStorItemKey  = `${this.genreName}Liked`;
    const localStorItem = JSON.parse(localStorage.getItem(localStorItemKey));


    if(!this.isLiked) {
      this.isLiked = true;
      localStorItem.liked[rank] = true;
      localStorItem.likedNumber = +localStorItem.likedNumber + 1;
      localStorage.setItem(localStorItemKey, JSON.stringify(localStorItem));
    } else {
      this.isLiked = false;
      delete localStorItem.liked[rank];
      localStorItem.likedNumber = +localStorItem.likedNumber - 1;
      localStorage.setItem(localStorItemKey, JSON.stringify(localStorItem));
    }
  }

}
