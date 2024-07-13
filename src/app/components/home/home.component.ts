import { Component } from '@angular/core';
import { ApiService } from 'src/app/servises/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    post:any[]=[];
    name="ravi";
    constructor(private apiservice:ApiService){}
    ngOnInit(){
      this.getPost();
      console.log(this.post);
    }

    getPost(){
        this.apiservice.data$.subscribe(data=>{
          this.post=data;
        })
    }
}
