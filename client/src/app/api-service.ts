import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  public headers = new HttpHeaders({   
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGNjZmNlMzBhYTQwZTBjMzhkYjJmMTYiLCJlbWFpbCI6InRlc3QxMjNAZ21haWwuY29tIiwiaWF0IjoxNzU4MjY0NTk4LCJleHAiOjE3NTk5OTI1OTh9.u_-e6zcLB3tTomYYvLqIaTSGSlRFni1KeVrovliUVZo'
  
});
  private apiURL = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get(`${this.apiURL}/items/all-items`,{ headers: this.headers });
  }

 

  addItems(item: any): Observable<any> {
     return this.http.post(`${this.apiURL}/items/add-items`,item,{ headers: this.headers });
  }

  addToCart(item: any): Observable<any> {
     return this.http.post(`${this.apiURL}/cart/add-to-cart`,item,{ headers: this.headers });
  }

  getUserCart(userId: any): Observable<any> {
     return this.http.get(`${this.apiURL}/cart/get-user-cart/${userId}`,{ headers: this.headers });
  }

 

}
