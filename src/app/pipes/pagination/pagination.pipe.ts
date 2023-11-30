import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(array:any[] | null, pageSize: number, pageNumber: number): any {

    if(!array){
      return [];
     }

    pageSize = pageSize || 5
    pageNumber = pageNumber || 1
    --pageNumber

    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

}
