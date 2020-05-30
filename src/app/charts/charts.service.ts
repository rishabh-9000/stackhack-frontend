import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.interface';
import { ChartData } from './models/charts.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/v1/user');
  }

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>('http://localhost:3000/v1/charts');
  }
}
