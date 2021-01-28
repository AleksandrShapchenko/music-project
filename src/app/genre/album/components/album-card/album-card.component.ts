import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../models/album.interface';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() album: Album;
  images: Image[];
  imgLarge: Image;
  imgLargeURL: String;

  constructor() { }

  ngOnInit(): void {
    this.images = this.album.image;
    this.imgLarge = this.images.find(img => img.size === "large");

    this.imgLargeURL = `url('${this.imgLarge['#text']}')`;
  }

}
