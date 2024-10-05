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
  gmail: string = '';
  password: string = '';
  response!:string;
  successMessage!: string;
  errorMessage!: string;
  constructor(private authService: AuthService, private router: Router,private dialogRef:MatDialogRef<LoginComponent>) {}

  onSubmit(): any{
    this.authService.login({ email: this.gmail, password: this.password }).subscribe(
      response => {
        if (response.token) {
          this.successMessage = 'Logged in successfully!';
          this.errorMessage = '';
        } else if (response.error) {
          this.errorMessage = response.error;
          this.successMessage = '';
        }
      },
      error => {
        console.error('Login failed', error);
        
      }
    );
  }
}
