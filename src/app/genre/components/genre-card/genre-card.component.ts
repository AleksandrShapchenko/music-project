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

  ngOnInit(): void {

  }
}
