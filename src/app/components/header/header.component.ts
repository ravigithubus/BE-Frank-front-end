import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/forms/login/login.component';
import { RegisterComponent } from 'src/app/forms/register/register.component';
import { AuthService } from 'src/app/servises/Auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  istrue:boolean=true;
  constructor(private dialog:MatDialog , private authService:AuthService){

  }
  openLoginPage(){
      const dialogRef= this.dialog.open(LoginComponent,{
        width:'40%',
        height:'50%',
        data:{
          name:"Ravids Gaikwad"
        }
      })  
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  userIsAuthenticated():boolean{
    return this.authService.isAuthenticated();
  }
  
  logout(){
    const logUot=confirm("Are you sure to log out.");
    if(logUot){
    this.authService.logout();
    }
  }
  openResisterPage(){
    const dialogRef= this.dialog.open(RegisterComponent,{
      width:'40%',
      height:'65%',
      data:{
        name:"Ravids Gaikwad"
      }
    })  
  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  });
  }
}
