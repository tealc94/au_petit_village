import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(figurines: any[], nomRecherche: string): any {
    if (!nomRecherche || nomRecherche.trim() === ''){
      return figurines;
    }

    nomRecherche = nomRecherche.toLowerCase();
    return figurines.filter(figurine => figurine.name.toLowerCase().includes(nomRecherche));
  }
}
