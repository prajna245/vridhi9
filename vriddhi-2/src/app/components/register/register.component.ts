


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  registrationError: string = '';
  passwordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      otp: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register() {
    const bodyData = {
      "firstname": this.registerForm.value.fullName,
      "email": this.registerForm.value.email,
      "phoneNumber": this.registerForm.value.phoneNumber,
      "otp": this.registerForm.value.otp,
      "password": this.registerForm.value.password,
    };

    this.http.post<any>("http://localhost:9002/api/client/create", bodyData).subscribe(
      (resultData) => {
        console.log(resultData);
        alert("Client Registered Successfully");
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error occurred during registration:', error);
        alert("An error occurred during registration. Please try again later.");
      }
    );
  }

  requestOTP() {
    console.log('Request OTP');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    this.register();
  }
}
