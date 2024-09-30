import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl=environment.apiUrl;
  private userSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public users$: Observable<any[]> = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAllUser(){
    this.http.get<any>(`${this.apiUrl}/user`).subscribe(users=>{
      this.userSubject.next(users);
    })
  }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user`, user);
  }
  deleteUser(id:any) {
    this.http.delete(`${this.apiUrl}/user/${id}`)
      .subscribe(() => {
        this.getAllUser();
      });
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
}
