import { Component } from '@angular/core';
import { ApiService } from './servises/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Be-Frank';
  constructor(private apiservice:ApiService){}
  ngOnInit(){
    this.apiservice.getPosts(); 
  }
}
