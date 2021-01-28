import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../models/album.interface';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  // filter by string
  transform(albums: Album[], ...args: string[]): unknown {
    console.log(albums, args);

    let searchParam: string = args.join('');
    if(!searchParam) return albums;
    return albums.filter( album => album.name.
      toLocaleLowerCase()
      .substring(0, searchParam.length) === searchParam.toLocaleLowerCase() )
  }

}
