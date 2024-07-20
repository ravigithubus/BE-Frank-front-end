import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servises/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router,private dialogRef:MatDialogRef<LoginComponent>) {}

  onSubmit(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        this.dialogRef.close();
        console.log('Login successful', response);
        this.router.navigate(['/']); // Redirect to home page or dashboard
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
