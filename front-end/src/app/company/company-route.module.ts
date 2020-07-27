import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

const compRoutes : Routes=[
    {path : 'home' , component: HomeComponent ,pathMatch:'full'},
    {path : 'home/list' , component: EmployeeListComponent ,pathMatch:'full'}

]
@NgModule({
    imports:[
        RouterModule.forChild(compRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class CompanyRoute{

}