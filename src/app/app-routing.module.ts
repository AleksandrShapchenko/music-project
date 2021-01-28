import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumPageComponent } from './genre/album/components/album-page/album-page.component';
import { GenrePageComponent } from './genre/components/genre-page/genre-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "genres",
    pathMatch: 'full',
  },
  {
    path: "genres",
    component: GenrePageComponent,
  },
  {
    path: "genres/:genre",
    component: AlbumPageComponent
  },
  {
    path: '**',
    redirectTo: 'genres'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
