import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form-by-template',
  templateUrl: './user-form-by-template.component.html',
  styleUrls: ['./user-form-by-template.component.scss']
})
export class UserFormByTemplateComponent implements OnInit {

  user = new User(0, '');

  constructor(

  ) { }

  ngOnInit(): void {
  }

  submit(data: any):void {
    console.log(data);
    
  }


}
