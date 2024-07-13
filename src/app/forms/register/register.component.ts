import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servises/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Redirect to login page
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
