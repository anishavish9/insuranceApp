import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private http:HttpClient, private ds:DataService){}

  onLogin() {
    if (this.username && this.password) {
      const requestBody = {username:this.username,password:this.password}
      this.http.post('http://localhost:8090/api/auth/login',requestBody, {responseType:'text'}).subscribe(
      response=>{
        console.log('Api response: ',response);
         alert('login successful!');
        this.ds.loginStatus = true
        this.router.navigate(['/home']);
    },
    error=>{
      console.error('login error',error);
      alert('invalid username or password');
    })
  }
    else {
      alert('Invalid username or password');
    }
  }
}


