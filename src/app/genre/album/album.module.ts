import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlbumPageComponent } from './components/album-page/album-page.component';
import { AlbumHeaderComponent } from './components/album-header/album-header.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumService } from './services/album.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlbumPageComponent, AlbumHeaderComponent, AlbumListComponent, AlbumCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [AlbumPageComponent],
  providers: [AlbumService]
})
export class AlbumModule { }
