import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCheck = true;

  constructor(private router : Router,  private route : ActivatedRoute,
   private authService : AuthService 
    ){

  }
  public href: string = "";
  title = 'front-end';
  ngOnInit() {
    this.authService.isLoggedIn()
      .subscribe(
        (res : boolean)=>{
          this.isCheck = res;
        }
      )
  }
  onLogout(){
    this.authService.logout()
    this.router.navigate(['/'])
  
  }
}
