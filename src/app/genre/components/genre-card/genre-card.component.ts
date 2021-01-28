import { Component, Input, OnInit } from '@angular/core';
import { Genre } from 'src/app/core/models/genre.interface';

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.scss']
})
export class GenreCardComponent implements OnInit {

  @Input() genre: Genre;
  
  constructor() { }

  ngOnChanges(simpleChanges) {
    if(simpleChanges.firstchange) {
      const genreName = this.genre.name.toLocaleLowerCase();
      localStorage.setItem(`${genreName}Liked`, `{"liked": {}, "likedNumber": "0"}`);
    }
  }

  ngOnInit(): void {
  }
}
