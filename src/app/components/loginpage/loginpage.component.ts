import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {


  email:string= '';
  password:string='';

  constructor(private auth: AuthService){}

  login(){
    this.auth.login(this.email,this.password);
  };
}

