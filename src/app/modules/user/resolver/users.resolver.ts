import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveEnd, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../user.service.abstract';

@Injectable({providedIn: 'root'})

export class UserResolver implements Resolve<User[]>{

    constructor(private userService:AbstractUserService){}

    resolve(route: ActivatedRouteSnapshot): User[] | Observable<User[]>| Promise<User[]> {
       return this.userService.getUsers();
    }

}
