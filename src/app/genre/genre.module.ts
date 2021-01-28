import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { AlbumModule } from './album/album.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GenreCardComponent, GenreListComponent, GenrePageComponent],
  imports: [
    CommonModule,
    AlbumModule, 
    RouterModule
  ],
  exports: [GenrePageComponent]
})
export class GenreModule { }
