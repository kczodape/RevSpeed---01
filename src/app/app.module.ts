import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './landingpage/navbar/navbar.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginAndRegistrationModule } from './login-and-registration/login-and-registration.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginAndRegistrationModule
  ],
  providers: [
    AuthService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
