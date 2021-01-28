import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit, DoCheck {

  searchParam: string;
  likedNumber: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.currentSearchParam.subscribe(searchParam => this.searchParam = searchParam);
  }

  ngDoCheck(): void {
    const genreName = this.route.snapshot.params.genre;
    this.likedNumber = JSON.parse(localStorage.getItem(`${genreName}Liked`)).likedNumber;
  }

  changeSearchParam() {
      this.dataService.changeSearchParam(this.searchParam);
  }

}
