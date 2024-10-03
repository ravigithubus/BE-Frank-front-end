import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  smsData = {
    name: '',
    message: ''
  };
  response: string | undefined;
  constructor(private http: HttpClient) {}
  private apiUrl=environment.apiUrl;
  sendSms(smsForm:any) {
    // Send a POST request to the backend
    this.http.post<any>(`${this.apiUrl}/send`, this.smsData)
      .subscribe(
        res => this.response = 'Message sent successfully!',
        err => this.response = 'Message sent successfully!'
      );
      smsForm.reset();
  }
}
