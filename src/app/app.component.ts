import { Component } from '@angular/core';
import { ApiService } from './servises/api.service';
import { AuthService } from './servises/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Be-Frank';
  constructor(private apiservice:ApiService,private authService:AuthService){}
  ngOnInit(){
    this.apiservice.getPosts(); 
    this.authService.getAllUser();
  }
}
