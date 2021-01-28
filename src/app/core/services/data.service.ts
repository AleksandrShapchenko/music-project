import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  // create observable search parameter
  private searchParamSource = new BehaviorSubject<string>("");
  currentSearchParam = this.searchParamSource.asObservable();

  constructor() { }

  // change observable search parameter
  changeSearchParam(searchParam: string) {
    this.searchParamSource.next(searchParam);
  }
}
