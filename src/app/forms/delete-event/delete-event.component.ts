import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  EventName!:any;    
  constructor(private dialogConfig:MatDialogRef<DeleteEventComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private apiservice:ApiService){}

  DeleteEvent(id:any){
      this.apiservice.deleteData(id);
      this.dialogConfig.close();
  }

  cancelDeleteevent(){
      this.dialogConfig.close();
  }

}
