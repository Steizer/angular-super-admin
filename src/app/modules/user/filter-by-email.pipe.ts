import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Pipe({
  name: 'filterByEmail'
})
export class FilterByEmailPipe implements PipeTransform {

  transform(value: Array<{ email: string }>, ...args: unknown[]): Array<any> {
    if (!args[0])
      return value;
    else
      return value.filter(val => val.email.includes(args[0] as string));
  }

}
