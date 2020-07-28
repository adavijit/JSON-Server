import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from  '@angular/material/icon';

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
     
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../services/company.service';
import { CompanyRoute } from './company-route.module';
import { AddEmployeeComponent } from './home/add-employee/add-employee.component';
import { EmployeeListComponent } from './home/employee-list/employee-list.component';
import { EmployeeStatisticsComponent } from './home/employee-statistics/employee-statistics.component';


@NgModule({
  declarations: [ AddEmployeeComponent, EmployeeListComponent, EmployeeStatisticsComponent],
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
    HttpClientModule,
    CompanyRoute
  ],
  exports:[
    
  ],
  providers:[
    CompanyService
  ],
  bootstrap:[
    
  ]

})
export class CompanyModule { }
