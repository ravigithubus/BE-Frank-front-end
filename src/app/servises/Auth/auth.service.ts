import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl=environment.apiUrl;
  private userSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public users$: Observable<any[]> = this.userSubject.asObservable();
  private loginSubject = new BehaviorSubject<any>(null);
  public token$: Observable<any> = this.loginSubject.asObservable();
  private tokenKey = 'authToken';
  constructor(private http: HttpClient) { }
 
  getAllUser(){
    this.http.get<any>(`${this.apiUrl}/user`).subscribe(users=>{
      this.userSubject.next(users);
    })
  }
  register(user: any): Observable<any> {
    return this.http.post<any>(`${environment.authUrl}/register`, user);
  }
  deleteUser(id:any) {
    this.http.delete(`${this.apiUrl}/user/${id}`)
      .subscribe(() => {
        this.getAllUser();
      });
  }

  login(credentials: any):Observable<any>{
      return this.http.post<any>(`${environment.authUrl}/login`, credentials).pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        catchError(error => {
          return of({ error: 'Invalid username or password' });
        })
      );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    //this.router.navigate(['/login']);
  }

}
