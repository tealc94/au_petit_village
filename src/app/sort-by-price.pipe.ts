import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
//a.price - b.price tri croissant
//b.price - a.price tri décroissant
  transform(price: any[], sortOrder: string): any[] {
    if(sortOrder === "croissant"){
      return price.sort((a:any,b:any) => {return a.price - b.price});
    }else if (sortOrder === "decroissant"){
      return price.sort((a:any,b:any) => {return b.price - a.price});
    }
    return price;
  }
}
