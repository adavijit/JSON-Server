import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isError = false;
  errorText = '';

  @Output() isSignupClicked = new EventEmitter<any>();
  @Output() isLoggedIn = new EventEmitter<any>();
  userForm: FormGroup;
  modalStyle: any = {
    display: 'none',
    position: 'fixed',
    'z-index': '1',
    'padding-top': '100px',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    'background-color': 'rgba(0,0,0,0.4)',
  };
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  ngOnInit(): void {}
  onSubmit() {
    this.authService
      .signIn({
        email: this.userForm.value.email,
        password: this.userForm.value.password,
      })
      .subscribe(
        (res) => {
          localStorage.setItem('token', JSON.stringify(res['accessToken']));
          this.isLoggedIn.emit();
        },
        (err) => {
          this.errorText = err.error;
          this.modalStyle = {
            display: 'block',
            position: 'fixed',
            'z-index': '1',
            'padding-top': '100px',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            'background-color': 'rgba(0,0,0,0.4)',
          };
        }
      );
  }

  onSignupClick() {
    this.isSignupClicked.emit();
  }
  closeModal() {
    this.modalStyle = {
      display: 'none',
      position: 'fixed',
      'z-index': '1',
      'padding-top': '100px',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      'background-color': 'rgba(0,0,0,0.4)',
    };
  }
}
