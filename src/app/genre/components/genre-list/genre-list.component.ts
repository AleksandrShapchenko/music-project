import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/core/models/genre.interface';

import { GENRES } from '../../../core/data/genres'

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss']
})
export class GenreListComponent implements OnInit {
  genres: Genre[] = GENRES;

  constructor() { }

  ngOnInit(): void {
  }

}

