import { Component,Input,Output,EventEmitter, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-look-event',
  templateUrl: './look-event.component.html',
  styleUrls: ['./look-event.component.css']
})
export class LookEventComponent {
    event:any;
    images!: any[];
    constructor(private dialogConfig:MatDialogRef<LookEventComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
    }
    ngOnInit(){
      this.event=this.data.event;
      this.images=this.event.imgUrl;
      console.log( this.images);
      console.log("opened")
    }
    
    goBackTodashboard(){
        this.dialogConfig.close();
    }
}
