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
    this.auth.signUp(this.email,this.password)
  };
}
