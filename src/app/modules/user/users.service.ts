import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';
import { AbstractUserService } from './user.service.abstract';

@Injectable()
export class UsersService extends AbstractUserService {
  refresh() {
    throw new Error('Method not implemented.');
  }

   users = new BehaviorSubject<User[]>(new Array<User>());
  
  constructor(private api: ApiService, private http:HttpClient
    ) { 
    super();
    /**this.users.push(new User(0, "a@a.fr"));
    this.users.push(new User(1, "b@b.fr"));
    this.users.push(new User(2, "c@c.fr"));*/
  }

  getUsers(): Observable<Array<User>>{
    return from([]);
  }

  addUser(user:User):Observable<Array<User>>{
    //this.users.push(user);
    return null;
  }
}
