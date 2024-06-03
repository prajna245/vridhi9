import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  createUser(user: any) {
    return this.http.post<any>('http://localhost:3008/users', user); 
    
  }
}





