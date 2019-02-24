import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

        console.log(items);
        if (searchText && searchText!='') {
            searchText = searchText.toLowerCase();
            console.log(searchText);
            return items.filter(function (el: any) {
                console.log(el.name.toLowerCase().indexOf(searchText));
                return el.name.toLowerCase().indexOf(searchText) > -1;
            })
        }
        console.log(items);
        return items;
   }
}