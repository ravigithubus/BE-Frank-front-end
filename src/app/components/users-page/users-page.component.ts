import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { DeleteUserComponent } from 'src/app/forms/delete-user/delete-user.component';
import { RegisterComponent } from 'src/app/forms/register/register.component';
import { AuthService } from 'src/app/servises/Auth/auth.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  users!:any[];

  constructor(private authservice:AuthService,private dialog:Dialog){}
  ngOnInit(){
    this.authservice.users$.subscribe(users=>{
      this.users=users;
      console.log(users);
    })
  }

  editUser(user: any) {
    console.log('Edit user', user);
    // Implement the edit logic here
  }

  deleteUser(id:any,name:any){
    const dialogRef=this.dialog.open(DeleteUserComponent,{
      width:'50%',
      height:'40%',
      data:{
          user_id:id,
          UserName:name
      }
    })
  }

  addUser(){
      const dialogRef= this.dialog.open(RegisterComponent,{
         width:'50%',
         height:'100%',
         data:{
           name:"Ravids Gaikwad"
         }
       })  
    //  dialogRef.afterClosed().subscribe(result => {
    //      console.log('The dialog was closed');
    //  });
  }
}
