import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserResolver } from '../resolver/users.resolver';
import { AddUser, GetUsers } from '../store/user.action';
import { UserState } from '../store/user.state';
import { AbstractUserService } from '../user.service.abstract';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  users: Array<User> | Observable<Array<User>>;
  currentUser: User = undefined;
  usersByResolver: UserResolver;

  @Select(UserState.getUsers)
  users$: Observable<User[]>;


  constructor(
    public usersService: AbstractUserService,
    public route: ActivatedRoute,
    public router: Router,
    public store:Store) {
  }

  ngOnInit(): void {
    this.users = this.usersService.refresh();
    this.usersByResolver = this.route.snapshot.data['users']
    console.log(this.route.snapshot.data['users']);
    this.store.dispatch(new GetUsers());
    
  }

  showDetails(user:User){
    this.router.navigate(['/users', user.id]);
  }

  public addUser(user:User){
    this.store.dispatch(new AddUser(user));
  }
}
