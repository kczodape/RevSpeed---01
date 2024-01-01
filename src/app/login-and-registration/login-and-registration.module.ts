import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegistrationRoutingModule } from './login-and-registration-routing.module';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginAndRegistrationRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class LoginAndRegistrationModule { }
