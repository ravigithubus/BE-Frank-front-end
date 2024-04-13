import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { post } from '../models/post-model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient){ }
 
  getPosts():Observable<post[]>{
    return this.http.get<post[]>(`${this.apiUrl}/post`)
  }
}
