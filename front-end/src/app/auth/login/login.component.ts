import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError= false
  errorText=""

  @Output() isSignupClicked = new EventEmitter<any>()
  @Output() isLoggedIn = new EventEmitter<any>()
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignupClick(){
    this.isSignupClicked.emit()
  }
  onSignInClick(email:string, password:string){
    this.authService.signIn({
      "email": email,
      "password": password
    })
    .then(res=>{
      console.log(res);

      localStorage.setItem('token',JSON.stringify(res['accessToken']))
      
      this.isLoggedIn.emit()
    })
    .catch(err=>{
      console.log(err);
      this.errorText = "Something error!!!"    
      let modal = document.getElementById('myModal')
      modal.style.display = "block";
    
    })
  }

}
