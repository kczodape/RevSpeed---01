import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  onSubmit(form: any) {
    const username: any = form.value.username;
    const password: any = form.value.password;
    if (this.authService.login(username, password)) {
      if (username == "admin") {
        this.router.navigateByUrl("/admin")
      } else if (username == "user") {
        this.router.navigateByUrl("/user");
      }
    }
    else {
      alert("Credentials wrong");
    }
    console.log("Form submited data: ", form.value);

  }
}
