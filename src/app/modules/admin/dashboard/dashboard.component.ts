import { Component } from '@angular/core';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // constructor(public authService: AuthService) { }

  logout():void{
    // this.authService.logOut();
  }
}
