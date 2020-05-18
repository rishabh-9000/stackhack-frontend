import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from './models/register.dto';
import { Register } from './models/register.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(payload: RegisterDto): Observable<any> {
    return this.http.post('http://localhost:3000/v1/user', payload);
  }
}
