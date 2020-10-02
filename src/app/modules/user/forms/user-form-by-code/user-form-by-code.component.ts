import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, find, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AbstractUserService } from '../../user.service.abstract';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-form-by-code',
  templateUrl: './user-form-by-code.component.html',
  styleUrls: ['./user-form-by-code.component.scss']
})
export class UserFormByCodeComponent implements OnInit {

  userForm: FormGroup;
  emailCtrl: AbstractControl;
  orgaCtrl: AbstractControl;

  @Output()
  intputsubmit = new EventEmitter<User>();

  constructor(fb: FormBuilder, private userService: AbstractUserService) {
    this.userForm = fb.group({
      /**email:fb.control('',[Validators.required
        ,Validators.email,
         Validators.min(10)],
         [
           control => this.isEmailNotAvailable(control)
         ]),*/
      email: fb.control('', {
        validators:
          [Validators.required
            , Validators.email,
          Validators.min(10)],
        asyncValidators:
          [
            control => this.isEmailNotAvailable(control)
          ],
        updateOn: 'blur'
      }),

      username: fb.control(''),
      password: fb.control(''),
      organisation: fb.control('', [Validators.required,
      UserFormByCodeComponent.orgaIsNotToto])
    });

    this.emailCtrl = this.userForm.get('email');
    this.orgaCtrl = this.userForm.get('organisation')

    this.emailCtrl.valueChanges.pipe(debounceTime(1000)).subscribe(val => console.log(val));

  }

  ngOnInit(): void {
  }

  static orgaIsNotToto(control: FormControl) {
    const organisation = control.value;
    return organisation === 'toto' ? { isToto: true } : null;
  }

  register(): void {
    console.log(this.userForm.value);
    this.intputsubmit.emit(this.userForm.value);
  }

  isEmailNotAvailable(control: AbstractControl): Observable<ValidationErrors> {
    const email = control.value;
    return this.userService.getUsers().pipe(
      switchMap(users => users),
      find(users => users.email === email),
      map(user => user ? { not_available: true } : null)
    )

  }

}
