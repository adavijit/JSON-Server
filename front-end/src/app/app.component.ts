import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSignup= false
  isLogin= true


  title = 'front-end';


  isLoginClicked(){
    this.isLogin = true
    this.isSignup= false
  }
  isSignupClicked(){
    this.isSignup = true
    this.isLogin = false
  }

}
