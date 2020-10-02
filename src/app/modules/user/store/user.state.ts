import { PathLocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../user.service.abstract';
import { AddUser, GetUsers } from './user.action';

export class UserStateModel {
    users: User[];
    isLoaded: boolean;
}

@State<UserStateModel>(
    {
        name: 'users',
        defaults: {
            users: [],
            isLoaded: false
        }
    }
)

@Injectable()
export class UserState {
    constructor(
        private userService: AbstractUserService,
    ) {

    }

    @Selector()
    static  getUsers(state: UserStateModel){
        return state.users;
    }

    @Selector()
    static getIsLoaded(state: UserStateModel){
        return state.isLoaded;
    }

    @Action(AddUser)
    addUser({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUser){
        return this.userService.addUser(payload).
        pipe(
            tap((result) => {
                //const state = getState();
                patchState({
                    users: result
                })
            })
        )
    }

    @Action(GetUsers)
    getAllUser({getState, patchState}: StateContext<UserStateModel>){
        return this.userService.getUsers().
        pipe(
            tap((users) => {
                patchState({
                    users: users,
                    isLoaded: true
                })
            })
        )
    }
}