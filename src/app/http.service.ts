import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCompany(cvr) {
    return this.http.get('http://62.199.9.36:8000/api/v1/enhjorning/company?cvr=' + cvr)
  }
}