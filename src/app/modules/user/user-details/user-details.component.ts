import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user:User;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"+data.user);
      this.user = data.user;
    })
  }

}
