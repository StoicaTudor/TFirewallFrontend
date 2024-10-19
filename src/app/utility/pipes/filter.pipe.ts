import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  standalone: true,
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterCriteria: { [key: string]: any }): any[] {
    if (!items || !filterCriteria) {
      return items
    }

    return items.filter(item => Object.keys(filterCriteria).every(key => item[key] === filterCriteria[key]))
  }
}
