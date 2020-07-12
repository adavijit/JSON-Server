import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async signUp(authDetails : any){
    console.log(authDetails);
    
    await fetch('http://localhost:3000/users/',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authDetails),
    })
    
    
    .then(res=>{
      console.log("asdasdasPPPPPPPPP");
      console.log(res);
      
      return res
    }).catch(err=>{
      return err
    })
  }
}
