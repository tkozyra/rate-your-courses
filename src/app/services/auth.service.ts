import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators'

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;
 
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if(user) {
        console.log("user logged in");
      } else{
        console.log("user logged out");
      }
    })
    this.userData = fireAuth.authState;
  }

  userData: Observable<firebase.User>; 

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }
 
  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }
 
  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
 
  logout() {
    return this.fireAuth.auth.signOut();
  }

 
    
  


}
