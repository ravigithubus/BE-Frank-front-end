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
  name!:string;
  email!:string;
  password!:string;

  constructor(private authService: AuthService, private router: Router,private dialogRef:MatDialogRef<RegisterComponent>) {}

  onSubmit(form: NgForm): void {
    this.authService.register({ username:this.name, email: this.email, password: this.password ,role:"admin"}).subscribe(
      response => {
        form.reset();
        //this.dialogRef.close();
        //this.authService.getAllUser();
        console.log("Registration successful",response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
/*   "username":"Ritesh P",
"email":"ritesh98@gmail.com",
"password":"Ritesh@123", 
"role":"admin" */