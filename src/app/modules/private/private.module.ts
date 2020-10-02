import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path :'', 
  component: LandingComponent,
  children: [
    {
      path :'first', component: FirstComponent
    },
    {
      path :'second', component: SecondComponent
    }
  ]
}
]


@NgModule({
  declarations: [LandingComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class PrivateModule { }
