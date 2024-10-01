import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersPageComponent } from 'src/app/components/users-page/users-page.component';
import { AuthService } from 'src/app/servises/Auth/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  UserName!:any;    
  constructor(private dialogConfig:MatDialogRef<DeleteUserComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private authservice:AuthService){}

  DeleteUser(id:any){
      this.authservice.deleteUser(id);
      this.dialogConfig.close();    
  }

  cancelDeleteuser(){
      this.dialogConfig.close();
  }
}
