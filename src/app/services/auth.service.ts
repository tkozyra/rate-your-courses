import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, auth } from 'firebase';
import { Observable, BehaviorSubject } from 'rxjs/index';
import { map, switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { CustomUser } from '../user'
import { FirestoreService } from './firestore.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(
    private fireAuth: AngularFireAuth,
    public router: Router,
    private firestoreService: FirestoreService,
    private db: AngularFireDatabase,
    public ngZone: NgZone
  ) {
    this.userData = fireAuth.authState;
  }

  userData: Observable<firebase.User>;

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ email, password }: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  register({ email, password }: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  logout() {
    return this.fireAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['login']);
      })
  }
}