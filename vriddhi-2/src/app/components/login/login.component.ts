
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const bodyData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.http.post<any>('http://localhost:9002/api/client/login', bodyData).subscribe(
      (resultData: any) => {
        if (resultData && resultData.status) {
        
          this.router.navigateByUrl('/home');
        } else {
          
          this.loginError = 'Incorrect email or password';
          console.log("Error login");
        }
      },
      error => {
        console.error('Error occurred during login:', error);
        this.loginError = 'An error occurred during login. Please try again later.';
      }
    );
  }

  onSubmit() {
    this.login();
  }
}










