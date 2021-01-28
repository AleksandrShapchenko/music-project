import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';


@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private locStorService: LocalStorageService) { }

  ngOnInit(): void {
    const genreName = this.route.snapshot.params.genre;
    
    // check key in object with writed to localStorage items
    if(!this.locStorService.writedItems[`${genreName}`]) {
      this.locStorService.setItem(`${genreName}Liked`, `{"liked": {}, "likedNumber": "0"}`);
      this.locStorService.writedItems[`${genreName}`] = true;
    }
  }

}
