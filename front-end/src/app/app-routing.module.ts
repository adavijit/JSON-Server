import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './company/home/home.component';



const appRoutes:Routes =[
    {path: '', redirectTo : '/login' , pathMatch:'full'},
    {path: 'home',redirectTo : '/login', pathMatch:'full',},
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{
    constructor(){

    }
}