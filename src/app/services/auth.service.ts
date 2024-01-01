import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate  {

  private isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login(username: String, password: String): boolean{
    if (username == 'admin' && password == '1234') {
      this.isAuthenticated = true;
      return true;
    }else if (username == 'user' && password == '1234') {
      this.isAuthenticated = true;
      return true;
    }else{
      this.isAuthenticated = false;
      return false;
    }
  }

  logOut(): void{
    this.isAuthenticated = false;
    this.router.navigateByUrl('/');
  }

  isAuthenticatedUser(): boolean{
    return this.isAuthenticated;
  }

  canActivate(): boolean{
    if (this.isAuthenticated) {
      return true;
    }else{
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
