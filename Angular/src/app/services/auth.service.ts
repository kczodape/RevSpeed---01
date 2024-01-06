import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {

  private isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  canActivate(): boolean{
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('jwt') !== null;

    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  logOut(): void{
    localStorage.removeItem('jwt');
    this.router.navigate(['/login'])
  }
}
