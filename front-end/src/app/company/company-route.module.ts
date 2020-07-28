import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { EmployeeStatisticsComponent } from './home/employee-statistics/employee-statistics.component';

const compRoutes : Routes=[
    {path : 'home' , component: EmployeeListComponent ,pathMatch:'full'},
    {path : 'home/add' , component: AddEmployeeComponent ,pathMatch:'full'},
    {path : 'home/statistics' , component: EmployeeStatisticsComponent ,pathMatch:'full'},



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