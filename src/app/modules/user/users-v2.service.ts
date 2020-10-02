import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap, toArray } from 'rxjs/operators';
import { AppConfig } from 'src/app/app.config';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from './user.service.abstract';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersV2Service extends AbstractUserService {

users = new BehaviorSubject<User[]>(new Array<User>());

  getUsers():  Observable<Array<User>> {
    return this.http.get<User[]>(this.config.apiEndPoint + '/users')
      .pipe(
        switchMap((data: any) => data),
        map((olduser: any) => {
          /**const u = new User(olduser.id, olduser.email)
          u.organisation = olduser.company.name;
        return u;*/
        return olduser as User}),
        tap(val => console.log(val)),
        toArray()
      )
  }
  
  refresh(){
    this.http.get<User[]>(this.config.apiEndPoint + '/users')
      .pipe(
        switchMap((data: any) => data),
        map((olduser: any) => {
          /**const u = new User(olduser.id, olduser.email)
          u.organisation = olduser.company.name;
        return u;*/
        return olduser as User}),
        tap(val => console.log(val)),
        toArray()
      )
  }

  addUser(user: User): Observable<Array<User>> {
    console.log("addUser" + user);
    return this.http.post<Array<User>>(this.config.apiEndPoint + '/users', user);
  }

  constructor(
    private http: HttpClient,
    private config:AppConfig
  ) {
    super();
  }


}
