import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: User, ...args: string[]): string {
    return `user[${value.email}/${value.organisation}]`;
  }

}
