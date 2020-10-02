import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../common/error/error.component';
import { LandingComponent } from '../common/landing/landing.component';
import { MenuComponent } from '../common/menu/menu.component';
import { AuthGuard } from '../guards/auth.guard';
import { AuthComponent } from '../modules/auth/auth/auth.component';
import { YourResolver } from '../modules/user/resolver/user.resolver';
import { UserResolver } from '../modules/user/resolver/users.resolver';
import { UserDetailsComponent } from '../modules/user/user-details/user-details.component';
import { UserComponent } from '../modules/user/user/user.component';
import { UsersComponent } from '../modules/user/users/users.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingComponent },
  {
    path: 'users', canActivate: [AuthGuard],
    children: [{
      path: ":id",
      resolve: {
        user: YourResolver
      },
      component: UserDetailsComponent
    }],
    resolve: {
      users: UserResolver
    },
    component: UsersComponent
  },
  { path: 'private', loadChildren: () => import('../modules/private/private.module').then(m => m.PrivateModule) },
  { path: 'auth', component: AuthComponent },
  { path: '**', component: ErrorComponent }
 
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  exports: [RouterModule]

})
export class RoutingModule { }
