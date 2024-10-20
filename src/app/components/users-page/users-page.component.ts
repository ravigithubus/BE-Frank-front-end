import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DeleteUserComponent } from 'src/app/forms/delete-user/delete-user.component';
import { RegisterComponent } from 'src/app/forms/register/register.component';
import { AuthService } from 'src/app/servises/Auth/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  users!:any[];

  constructor(private authservice:AuthService,private dialog:MatDialog){}
  ngOnInit(){
    this.authservice.users$.subscribe(users=>{
      this.users=users;
      console.log(users);
    })
  }
  userIsAuthenticated():boolean{
    return this.authservice.isAuthenticated();
  }
  userIsAdmin():string | null{
    return this.authservice.getRole();
  }
  editUser(user: any) {
    console.log('Edit user', user);
    // Implement the edit logic here
  }

  deleteUser(user:any){
    if(this.users.length>1 && this.users[0].role=='admin'){
      const dialogRef=this.dialog.open(DeleteUserComponent,{
        width:'50%',
        height:'40%',
        data:{
            user_id:user._id,
            UserName:user.username
        }
      
      })
    }else{
      alert("You can not delete this admin If you want to delete this admin please create another admin and delete this one.")
    }
  }

  addUser(){
      const dialogRef= this.dialog.open(RegisterComponent,{
         width:'50%',
         height:'90%',
         data:{
           name:"Ravids Gaikwad"
         }
       })  
     dialogRef.afterClosed().subscribe(result => {
         console.log('The dialog was closed');
     });
  }
}
