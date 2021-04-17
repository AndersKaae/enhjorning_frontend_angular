import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCompany(cvr) {
    return this.http.get('http://192.168.1.66:8555/api/v1/enhjorning?cvr=' + cvr)
  }
}