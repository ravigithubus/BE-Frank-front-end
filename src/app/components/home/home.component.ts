import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/servises/api.service';
import { LookEventComponent } from '../events/look-event/look-event.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    recentEvents:any[]=[];
    name="ravi";
    constructor(private apiservice:ApiService,private dialog:MatDialog){}
    ngOnInit(){
      this.getPost();
    }

    getPost(){
        this.apiservice.data$.subscribe(data=>{
          let lastThreeElements = data.slice(-3);
          this.recentEvents.push(...lastThreeElements);
          this.recentEvents.reverse();
          console.log(this.recentEvents);
        })
    }


    openEvent(event:any){
      const dialogRef= this.dialog.open(LookEventComponent,{
        width:'100%',
        height:'100%',
        data:{
          event:event
        }
      })  
    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }
  formatDate(input:any){
    return this.apiservice.formatDate(input);
  }
}
