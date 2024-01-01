import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'loginandregistration',
    loadChildren: () => import('../app/login-and-registration/login-and-registration.module').then((m) => m.LoginAndRegistrationModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/admin/admin.module').then((m) => m.AdminModule),
    canActivate:[AuthService]
  },
  {
    path:'user',
    loadChildren: ()=> import('../app/user/user.module').then((m)=> m.UserModule),
    canActivate:[AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
