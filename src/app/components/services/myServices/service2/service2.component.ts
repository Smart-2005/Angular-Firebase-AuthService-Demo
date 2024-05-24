import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrl: './service2.component.scss'
})
export class Service2Component implements OnInit {
  constructor(private fireAuth:AngularFireAuth, private router:Router){}

  IslogedIn:boolean = false;

  ngOnInit(): void {
    this.fireAuth.authState.subscribe(user=>{
      this.IslogedIn= !!user
    })
  }

  signOut() {
    const AreYouSure = confirm('Are you sure?');
    if (AreYouSure) {
      this.fireAuth.signOut().then(() => {
        // Sign-out successful
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
      }).catch(error => {
        // Handle sign-out error
        console.log('Error signing out:', error);
      });
    }

  }
}
