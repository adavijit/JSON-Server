import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from  '@angular/material/icon'; 
import {MatSidenavModule} from  '@angular/material/sidenav';;
import {MatListModule } from  '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent,SignupComponent,LoginSignupComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    LoginSignupComponent
    
  ]
})
export class AuthModule { }
