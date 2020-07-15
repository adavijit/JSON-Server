import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/model/users.model';
import { FormBuilder, Validators, ValidationErrors, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() isLoginClicked = new EventEmitter<any>()
  isError= false
  errorText=""
  userForm;
  modalStyle= {
    "display": "none",
    "position": "fixed",
    "z-index": "1",
    "padding-top": "100px",
    "left": "0",
    "top": "0",
    "width": "100%",
    "height": "100%",
    "overflow": "auto",
    "background-color": "rgba(0,0,0,0.4)" 
  
};
  userDetails : User

  constructor(
    private formBuilder: FormBuilder,
    private authService : AuthService) { 

      this.userForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password:['',[Validators.required]],
        confirmPassword: ['',[Validators.required,SignupComponent.matchValues('password')],
      ]

        
      });
    }
    public static matchValues(
      matchTo: string // name of the control to match to
    ): (AbstractControl) => ValidationErrors | null {
      return (control: AbstractControl): ValidationErrors | null => {
        return !!control.parent &&
          !!control.parent.value &&
          control.value === control.parent.controls[matchTo].value
          ? null
          : { isMatching: false };
      };
  }
    get firstName() {
      return this.userForm.get('firstName');
    }
   
    get email() {
      return this.userForm.get('email');
    }
   
    get lastName() {
      return this.userForm.get('lastName');
    }
    get password() {    
      return this.userForm.get('password');
    }
    get confirmPassword() {
      return this.userForm.get('confirmPassword');
    }

  ngOnInit(): void {
  }
  onLoginClick(){
    this.isLoginClicked.emit()
  }
  onSubmit(){
    this.userDetails= {
    firstName : this.userForm.value.firstName,
    lastName: this.userForm.value.lastName,
    email: this.userForm.value.email,
    password: this.userForm.value.password
    }
   
    
    this.authService.signUp(this.userDetails)
        .subscribe(res=>{
            this.isError= false
            this.errorText = "Saved successfully!!!" 
            console.log('success');
            this.modalStyle = {
              "display": "block",
            "position": "fixed",
            "z-index": "1",
            "padding-top": "100px",
            "left": "0",
            "top": "0",
            "width": "100%",
            "height": "100%",
            "overflow": "auto",
            "background-color": "rgba(0,0,0,0.4)" 
            }
        },
        err=>{
          this.isError= true
          this.errorText= err.error
          console.log(err.error);
          this.modalStyle = {
            "display": "block",
          "position": "fixed",
          "z-index": "1",
          "padding-top": "100px",
          "left": "0",
          "top": "0",
          "width": "100%",
          "height": "100%",
          "overflow": "auto",
          "background-color": "rgba(0,0,0,0.4)" 
          }
        }
        )
        
  }

  closeModal(){
    this.modalStyle = {
      "display": "none",
    "position": "fixed",
    "z-index": "1",
    "padding-top": "100px",
    "left": "0",
    "top": "0",
    "width": "100%",
    "height": "100%",
    "overflow": "auto",
    "background-color": "rgba(0,0,0,0.4)" 
    }
    
  }

}
