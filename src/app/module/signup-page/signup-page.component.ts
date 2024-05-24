import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

  email:string= '';
  password:string='';
  constructor(private auth: AuthService){}

  signUp(){
    if(this.email == ''){
      alert('Please Enter Your Email');
      return
    }
    if(this.password == ''){
      alert('Please Enter Your Password');
      return
    }
    this.auth.signUp(this.email,this.password);
    this.email= '';
    this.password= '';

  };
}
