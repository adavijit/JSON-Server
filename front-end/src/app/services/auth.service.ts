import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../shared/model/users.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged_in = false;
  constructor(private http: HttpClient) {}
  private logger = new Subject<boolean>();
  signUp(authDetails: User): Observable<any> {
    return this.http.post<any>('http://localhost:3000/register', authDetails);
  }
  signIn(authDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', authDetails);
  }
  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }

  
  login(token: string){
    localStorage.setItem('token', token);
    this.logged_in = true;
    this.logger.next(this.logged_in);
  }
  logout(){
    localStorage.removeItem('token');
    this.logged_in = false;
    this.logger.next(this.logged_in);
  }
}
