import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoginSignup = true;

  title = 'front-end';
  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.isLoginSignup = false;
    } else {
      this.isLoginSignup = true;
    }
  }
  handleAuthChange(status: string) {
    if (status === 'login') {
      this.isLoginSignup = false;
    }
    if (status === 'logout') {
      localStorage.removeItem('token');
      this.isLoginSignup = true;
    }
  }
}
