import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, value: string): any[] {
    if(products) {
      if(value === '') {
        return products;
      }else{
        return products.filter((list: any) => {
          return list.name.toLowerCase().includes(value.toLocaleLowerCase())
        });
      }
    }
    return products;
  }

}
