import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveEnd, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { find, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../user.service.abstract';

@Injectable({providedIn: 'root'})

export class YourResolver implements Resolve<User>{

    constructor(private userService:AbstractUserService){}

    resolve(route: ActivatedRouteSnapshot): User| Observable<User>| Promise<User> {
       
        const id = parseInt(route.paramMap.get('id'));
       
        return this.userService.getUsers().pipe(
            switchMap(users => users), find(user =>user.id ===id))

    }

}
