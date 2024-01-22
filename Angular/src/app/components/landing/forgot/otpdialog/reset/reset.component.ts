import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscribersService } from '../../../../../services/subscribers.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss',
})
export class ResetComponent {
  passwordForm: FormGroup | any;

  constructor(
    public dialogRef: MatDialogRef<ResetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private subscribersService : SubscribersService
  ) {
    this.passwordForm = this.fb.group({
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  verifyPasswords(passwordForm: NgForm) {
    const password1 = passwordForm.value.password1;
    const password2 = passwordForm.value.password2;
    const emailCheck : string | any = sessionStorage.getItem('emailCheck')
    if (password1 === password2) {
      console.log('Passwords matched: Yes');
      this.updatePassword(emailCheck, password1);
    } else {
      console.log('Passwords matched: No');
      alert("Email not present !");
    }

    // You can close the dialog if needed
    this.dialogRef.close();
  }

  updatePassword(email: string, newPassword: string): void {
    this.subscribersService.updatePassword(email, newPassword).subscribe(
      (response) => {
        console.log('Password updated successfully!', response);
        // Handle success, if needed
      },
      (error) => {
        console.log('Error updating password:', error);
        // Handle error, if needed
      }
    );
  }
}
