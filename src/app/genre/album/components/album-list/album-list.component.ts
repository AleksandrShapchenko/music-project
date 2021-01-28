import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Album } from '../../models/album.interface';
import { AlbumHttpClientService } from '../../services/album-http-client.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  genreName: string;
  albums: Album[];
  albumName: string;

  constructor(private http: AlbumHttpClientService, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.genreName = params.genre;
        this.http.getAlbumsByGenreFromAPI(this.genreName)
        .subscribe(
          (response) => {
          this.albums = response.albums.album;
        })
      }
    )

    this.dataService.currentAlbumName.subscribe(albumName => this.albumName = albumName);
  }

}
