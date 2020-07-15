import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule, CompanyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
