import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, filter: string): any[] {
    if (value.length === 0 || filter === '') return value;

    const results: any[] = [];
    for (const result of value) {
      if (result['nombre'].toUpperCase().includes(filter.toUpperCase())) {
        results.push(result);
      }
    }
    return results;
  }
}
