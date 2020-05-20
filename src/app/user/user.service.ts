import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from './models/register.dto';
import { Register, ImageInfo } from './models/register.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(payload: RegisterDto): Observable<Register> {
    return this.http.post<Register>('http://localhost:3000/v1/user', payload);
  }

  uploadImage(payload: FormData): Observable<ImageInfo> {
    return this.http.post<ImageInfo>(
      'http://localhost:3000/v1/user/upload-ID',
      payload
    );
  }
}
