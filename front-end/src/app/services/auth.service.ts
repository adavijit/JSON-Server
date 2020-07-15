import { Injectable } from '@angular/core';
import axios from 'axios'
import { User } from '../shared/model/users.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(authDetails : User): Observable<any>{
    return this.http.post<any>('http://localhost:3000/register',authDetails)
  }
  signIn(authDetails : any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/login',authDetails)
  }
}
