import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Output() isSignupClicked = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onSignupClick(){
    this.isSignupClicked.emit()
  }

}
