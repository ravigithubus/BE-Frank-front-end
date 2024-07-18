import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/forms/login/login.component';
import { RegisterComponent } from 'src/app/forms/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  istrue:boolean=true;
  constructor(private dialog:MatDialog){

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
