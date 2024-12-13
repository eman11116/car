import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(productSearch:Product[],searchTerm:string): Product[] {
    return productSearch.filter((product)=>product.car.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

}
