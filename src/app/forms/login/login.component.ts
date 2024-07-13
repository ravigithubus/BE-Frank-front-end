import { Component } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/']); // Redirect to home page or dashboard
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
