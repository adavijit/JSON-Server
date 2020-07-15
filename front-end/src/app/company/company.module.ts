import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from  '@angular/material/icon';
import { AddEmployeeComponent } from './add-employee/add-employee.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu'
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
// import {MatNativeDateModule} from '@angular/material/datepicker'
import {MatRadioModule} from '@angular/material/radio'
import { BrowserModule } from '@angular/platform-browser';      
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeStatisticsComponent } from './employee-statistics/employee-statistics.component';      
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../services/company.service';


@NgModule({
  declarations: [HomeComponent, AddEmployeeComponent, EmployeeListComponent, EmployeeStatisticsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatRadioModule,      
    MatSelectModule,  
    MatTableModule,
    ChartsModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports:[
    HomeComponent
  ],
  providers:[
    CompanyService
  ]

})
export class CompanyModule { }
