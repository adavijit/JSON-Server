import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Email', 'Age', 'Gender','Department', 'Address'];
  
  
  dataSource = [ ];
  isDataLoaded= false
  
  constructor(private companyService : CompanyService  ) {
   
   }

   ngOnInit() {
   this.loadTable()
  }
  loadTable(){
    this.companyService.getAllEmployee()
    .then(res=>{

      
     for(let i=0;i<Object.keys(res).length;i++){
     

       
      this.dataSource.push({
        "contact" : res[i].contact,
        "name": res[i].name,
        "email": res[i].email,
        "department": res[i].department,
        "age":  res[i].age,
        "gender":  res[i].gender,
        "address":  res[i].address,
        "id": res[i].id
     

      })
     }
     this.isDataLoaded = true
    })
  }
   

}
