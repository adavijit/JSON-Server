import { Injectable } from '@angular/core';
 
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  // getAllEmployee(): Observable<any> {  
  //   return this.http.get<any>('http://localhost:3000/employees').pipe(delay(1000));  
    
  // }  
  async saveEmployeeData(authDetails : any){
    return new Promise(async (resolve, reject) => {
      try {
          axios.post('http://localhost:3000/employees',authDetails)
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
  async getAllEmployee(){
    return new Promise(async (resolve, reject) => {
      try {
          axios.get('http://localhost:3000/employees')
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
  async getDepartmentData(department:string){
    return new Promise(async (resolve, reject) => {
      try {
          axios.get(`http://localhost:3000/employees?department=`+department)
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
