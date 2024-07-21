import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LookEventComponent } from 'src/app/components/events/look-event/look-event.component';
import { ApiService } from 'src/app/servises/api.service';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent {
  EventName!:any;    
  constructor(private dialogConfig:MatDialogRef<DeleteEventComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
  private apiservice:ApiService,private dialogConfiglookEvent:MatDialogRef<LookEventComponent>){}

  DeleteEvent(id:any){
      this.dialogConfiglookEvent.close();
      this.apiservice.deleteData(id);
      this.dialogConfig.close();    
  }

  cancelDeleteevent(){
      this.dialogConfig.close();
  }

}
