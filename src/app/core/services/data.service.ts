import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private searchParamSource = new BehaviorSubject<string>("");
  currentSearchParam = this.searchParamSource.asObservable();

  constructor() { }

  changeSearchParam(searchParam: string) {
    this.searchParamSource.next(searchParam);
  }
}
