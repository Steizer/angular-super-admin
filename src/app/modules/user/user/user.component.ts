import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../user.service.abstract';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user')
  user: User;

  @Output('select')
  select = new EventEmitter<User>();

  users:Array<User> | Observable<Array<User>>;

  constructor(
    public userService: AbstractUserService
  ) { }

  ngOnInit(): void {
    this.userService.refresh();
  }

}
