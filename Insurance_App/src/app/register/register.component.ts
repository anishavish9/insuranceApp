import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http:HttpClient) {}

  onRegister() {
    if (this.email && this.username && this.password) {
      const requestBody = {email:this.email,username:this.username,password:this.password}
      this.http.post('http://localhost:8090/api/auth/register',requestBody, {responseType:'text'}).subscribe(
      response=>{
        console.log('Api response: ',response);
         alert('Registration successful!');
        //this.router.navigate(['/login']);
        this.router.navigate(['/home']);
    },
    error=>{
      console.error('Registration error',error);
    })
    } else {
      alert('Please fill in all fields');
    }
  }

}
