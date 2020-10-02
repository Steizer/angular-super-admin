import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule, FormsModule, FlexLayoutModule,
     ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  exports:[
    AuthComponent
  ]
})
export class AuthModule { }
