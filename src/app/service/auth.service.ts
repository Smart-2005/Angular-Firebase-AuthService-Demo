import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { error, log } from 'console';
import { Unsubscribe } from 'firebase/app-check';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore:AngularFirestore ,private fireAuth : AngularFireAuth, private router: Router) { }

  signUp(email:string,password:string){
     this.fireAuth.createUserWithEmailAndPassword(email,password).then((userCredential)=>{
      return userCredential.user?.sendEmailVerification().then(()=>{
        alert("Your Email Verification Email is Sent!!");
        this.router.navigate(['/loginpage'])

    });
    
    },error =>{

      console.log(error);
      this.router.navigate(['/signuppage'])
      
     })
  }

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          if (user.emailVerified) {
            // User email is verified
            localStorage.setItem('token', 'true');
            this.router.navigate(['']);
          } else {
              alert('Please verify your email address!');
              this.router.navigate(['/loginpage']);
              
          }
        } else {
          alert('An error occurred during login. Please try again later.');
          this.router.navigate(['/loginpage']);
        }
      })
      .catch((error) => {
        alert('Check your credentials');
        this.router.navigate(['/loginpage']);
      });
  }

}
