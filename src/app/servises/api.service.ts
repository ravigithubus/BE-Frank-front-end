import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { post } from '../models/post-model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data$: Observable<any[]> = this.dataSubject.asObservable();

  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient,private datePipe: DatePipe,private router: Router, private loaderService: LoaderService){ }
 
  getPosts():void{
    this.loaderService.show();
    this.http.get<any[]>(`${this.apiUrl}/post`).subscribe(data=>{
      this.dataSubject.next(data.reverse());
      this.loaderService.hide()
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
    this.http.delete(`${this.apiUrl}/post/${id}`)
      .subscribe(() => {
        this.router.navigate(['/home']);
        this.getPosts(); // Refresh data after delete
      });
  }

  formatDate(isoString: string){
    const date = new Date(isoString);
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }
}
