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
  private loginSubject = new BehaviorSubject<any>(null);
  public token$: Observable<any> = this.loginSubject.asObservable();
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

  login(credentials: any):any{
      this.http.post<any>(`${environment.authUrl}/login`, credentials).subscribe(
        response => {
          console.log('Login successful', response);
          this.loginSubject.next(response.token);

          return 'Login successful';
        },
        error => {
          console.error('Login failed', error);
          return 'Login failed';
        }
      );
  }
}
