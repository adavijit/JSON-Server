import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from '../shared/model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  saveEmployeeData(empDetails: EmployeeDetails): Observable<any> {
    return this.http.post<any>('http://localhost:3000/employees', empDetails);
  }
  getAllEmployee(): Observable<EmployeeDetails> {
    return this.http.get<any>('http://localhost:3000/employees');
  }
  getDepartmentData(department: string) {
    return this.http.get<any>(
      `http://localhost:3000/employees?department=` + department
    );
  }
}
