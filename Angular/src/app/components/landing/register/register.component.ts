import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../services/jwt.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;

  constructor(
    private service: JwtService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      phoneNumber: [''],
      address: ['']
    }, { validator: this.passwordMathValidator })
  }

  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm() {
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe(
      (response) => {
        if (response.id != null) {
          alert("Hello " + response.name);
        }
      }
    )
  }

  isFieldInvalid(fieldName: string): boolean | any {
    const field = this.registerForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

  getErrorMessage(): string {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl?.hasError('required')) {
      return 'Password is required';
    }
    if (passwordControl?.hasError('minlength')) {
      return 'Password should be at least 6 characters long';
    }
    if (passwordControl?.hasError('pattern')) {
      return 'Password should contain at least one capital letter, one small letter, one number, and one special character';
    }
    return '';
  }

isEmailExists(): boolean {
  const emailControl: AbstractControl | null =
    this.registerForm.get('email');
  const email: string = emailControl?.value;
  const emailExists = false; 
  return emailExists;
}


}
