import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: any, propName: string): any {
    if(!value.length || !filterString) {
      return value;
    }

    const resultArray = [];
    for(let item of value) {
      if(item[propName].includes(filterString)) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
