import { Pipe, PipeTransform } from '@angular/core';
import { ICountry } from '../../components/country/models/ICountry';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICountry[], searchValue: string): ICountry[] {
    if (!searchValue) return value;

    return value.filter((v: ICountry) => v.name.includes(searchValue));
  }

}
