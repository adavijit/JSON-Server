import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { EmployeeDetails } from 'src/app/shared/model/employee.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [ 'Name', 'Email', 'Age', 'Gender','Department','Technologies', 'Address'];
  
  
  dataSource=[]
  isDataLoaded= false
  public href: string = "";
  constructor(private companyService : CompanyService , private router: Router) {
   
   }

   ngOnInit() {
    this.loadTable()
  }
  loadTable(){
    this.companyService.getAllEmployee().subscribe(res=>{
       for(let i=0;i<Object.keys(res).length;i++){

       
      this.dataSource.push({
        "contact" : res[i].contact,
        "name": res[i].name,
        "email": res[i].email,
        "department": res[i].department,
        'technology' : res[i].technology,
        "age":  res[i].age,
        "gender":  res[i].gender,
        "address":  res[i].address
      })
     }
     this.isDataLoaded = true
    })

    
  }
   

}
