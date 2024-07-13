import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  uploadImage(image: File): Observable<string> {
      const formData = new FormData();
      formData.append('file', image);
      return  this.http.post<{ imageUrl: string }>('https://vsm-be-frank.onrender.com/images/upload', formData).pipe(
        map(response => response.imageUrl)
      )
  }
}
