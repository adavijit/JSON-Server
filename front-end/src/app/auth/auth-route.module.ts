import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const authRoutes : Routes=[
    {path : 'login' , component: LoginComponent ,pathMatch:'full'},
    {path : '' , redirectTo:'login', pathMatch:'full'},
    {path : 'signup' , component: SignupComponent ,pathMatch:'full'}


]
@NgModule({
    imports:[
        RouterModule.forChild(authRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AuthRoute{

}