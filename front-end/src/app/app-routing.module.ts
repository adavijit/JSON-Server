import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';




const appRoutes:Routes =[
    {path: '', redirectTo : '/login' , pathMatch:'full'},
    {path: 'home', redirectTo : '/home' , pathMatch:'full'},

 
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