import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthService } from './services/auth.service';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/landing/login/login.component';
import { RegisterComponent } from './components/landing/register/register.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthService],
  },
  {
    path:'user',
    loadChildren: () => import('../app/modules/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
