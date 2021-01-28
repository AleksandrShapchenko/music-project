import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../models/album.interface';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  genreName: String;
  albums: Album[];

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.genreName = params.genre;
        this.albumService.getAlbumsByGenre(this.genreName)
        .subscribe(
          (response) => {
          this.albums = response.albums.album;
          console.log(this.albums)
        })
      }
    )
  }

}
