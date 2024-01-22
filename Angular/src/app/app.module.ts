import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';
import { LoginComponent } from './components/landing/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/landing/register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { JwtService } from './services/jwt.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CarouselComponent } from './components/landing/carousel/carousel.component';
import { BroadbandplansComponent } from './components/landing/broadbandplans/broadbandplans.component';
import { IndividualcardsComponent } from './components/landing/broadbandplans/individualcards/individualcards.component';
import { BusinesscardsComponent } from './components/landing/broadbandplans/businesscards/businesscards.component';
import { ViewdetailedbroadbandComponent } from './components/landing/viewdetailedbroadband/viewdetailedbroadband.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './components/landing/aboutus/aboutus.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    BroadbandplansComponent,
    IndividualcardsComponent,
    BusinesscardsComponent,
    ViewdetailedbroadbandComponent,
    FooterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatChipsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => sessionStorage.getItem('jwt'),
        // allowedDomains: ['your-api-domain.com'], // replace with your API domain
      },
    }),
  ],
  providers: [
    // AuthService,
    JwtService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
