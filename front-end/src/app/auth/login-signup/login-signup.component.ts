import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor() { }
  @Output() onUserLoggedIn = new EventEmitter<any>()

  ngOnInit(): void {
  }
  isSignup= false
  isLogin= true



  isLoginClicked(){
    this.isLogin = true
    this.isSignup= false
  }
  isSignupClicked(){
    this.isSignup = true
    this.isLogin = false
  }
  onLoggedIn(){
    this.onUserLoggedIn.emit()
  }
}
