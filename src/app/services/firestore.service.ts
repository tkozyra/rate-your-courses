import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : AngularFirestore) {
    this.getData();
  }

  getData(){
    return this.firestore.collection('courses').valueChanges();
  }

  createdata(course: Course){
    return this.firestore.collection('courses').add(course);
  }

}
