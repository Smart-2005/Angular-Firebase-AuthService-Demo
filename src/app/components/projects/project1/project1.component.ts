import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.scss'
})
export class Project1Component {
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
