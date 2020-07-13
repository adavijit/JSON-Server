import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() isLoginClicked = new EventEmitter<any>()
  isError= false
  errorText=""
  

  constructor(
    
    private authService : AuthService) { }

  ngOnInit(): void {
  }
  ValidateEmail(email:string) 
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      return (false)
  }

  onLoginClick(){
    this.isLoginClicked.emit()
  }
  onSignup(firstName:string, lastName:string,email:string,password:string,confirmPassword:string){
    let modal = document.getElementById('myModal')
    modal.style.display = "block";

    
    if(this.ValidateEmail(email) && confirmPassword===password ){
      this.authService.signUp({
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "password" : password
      })
      .then(res=>{
        console.log(res);
        // localStorage.setItem('token',JSON.stringify(res['accessToken']))
        
      } 
      ).catch(err=>{
        this.errorText= "Something error!!!"
        this.isError= true
        
      })

    }else{
      this.errorText= "Something error!!!"
      this.isError = true
      
    }

  }
 
  closeModal(){
    let modal = document.getElementById('myModal')

    modal.style.display = "none";
    
  }

}
