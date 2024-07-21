import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { post } from '../models/post-model';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data$: Observable<any[]> = this.dataSubject.asObservable();

  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient,private datePipe: DatePipe){ }
 
  getPosts():void{
    this.http.get<any[]>(`${this.apiUrl}/post`).subscribe(data=>{
      this.dataSubject.next(data);
    })
  }

  postData(data:any):void{
    this.http.post<post[]>(`${this.apiUrl}/post`,data).subscribe(response => {
      console.log('Post created successfully:', response);
      this.getPosts();
    }, error => {
      console.error('Error creating post:', error);
    });
  }

  deleteData(id:any) {
    this.http.delete(`https://vsm-be-frank.onrender.com/post/${id}`)
      .subscribe(() => {
        this.getPosts(); // Refresh data after delete
      });
  }

  formatDate(isoString: string){
    const date = new Date(isoString);
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }
}
