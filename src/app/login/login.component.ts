import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message = '';

  constructor(private apiService : ApiService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  ngOnInit() {
  }

  loginBtn(){
    if(this.loginForm.valid){
      this.apiService.login(this.loginForm.value).subscribe(res =>{
        console.log(res);
        if(res.message === 'ok'){
          // redirection
        } else{
          this.message = res.message;
        }
      })
    }
  }

}
