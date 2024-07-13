import { Component } from '@angular/core';
import { ApiService } from 'src/app/servises/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from 'src/app/forms/add-event/add-event.component';
import { DeleteEventComponent } from 'src/app/forms/delete-event/delete-event.component';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
    post:any[]=[];
    showEvent:boolean=false;
    eventTochild:any;
    constructor(private apiservice:ApiService,private dialog:MatDialog){}
    ngOnInit(){
      this.getPost();
      console.log(this.post);
    }


    addEvent(){
       const dialogRef= this.dialog.open(AddEventComponent,{
          width:'50%',
          height:'100%',
          data:{
            name:"Ravids Gaikwad"
          }
        })  
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
    }

    
    getPost(){
      this.apiservice.data$.subscribe(data=>{
        this.post=data;
      })    
    }
    deleteEvent(id:any,name:any){
      const dialogRef=this.dialog.open(DeleteEventComponent,{
        width:'50%',
        height:'40%',
        data:{
            imgId:id,
            EventName:name
        }
      })
      
    }
    openEvent(event:any){
      this.showEvent=true;
      this.eventTochild=event;
    }
}
