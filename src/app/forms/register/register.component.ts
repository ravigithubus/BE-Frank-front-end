import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  onSubmit(form: NgForm): void {
    this.authService.register({ username:this.name, gmail: this.email, password: this.password }).subscribe(
      response => {
        //this.dialogRef.close();
        form.reset();
        console.log('Registration successful', response);
        this.authService.getAllUser();
        //this.router.navigate(['/login']); // Redirect to login page
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
