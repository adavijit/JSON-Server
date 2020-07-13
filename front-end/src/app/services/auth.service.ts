import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signUp(authDetails : any){
    return new Promise(async (resolve, reject) => {
      try {
          axios.post('http://localhost:3000/register',authDetails)
          .then(res=>{
            resolve(res.data)
          })
          .catch(err=>{
            reject(err)
          })
      } 
      catch (error) {
        reject(error);  
      }
    });
  }
  async signIn(authDetails : any){
    return new Promise(async (resolve, reject) => {
      try {
          axios.post('http://localhost:3000/login',authDetails)
          .then(res=>{
            resolve(res.data)
          })
          .catch(err=>{
            reject(err)
          })
      } 
      catch (error) {
        reject(error);  
      }
    });
  }
}
