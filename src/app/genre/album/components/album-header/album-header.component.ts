import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit {

  albumName: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentAlbumName.subscribe(albumName => this.albumName = albumName);
  }

  changeName() {
      this.dataService.changeAlbumName(this.albumName);
  }

}
