import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('')
    });
    
  }

  onSubmit(){

  }

}
