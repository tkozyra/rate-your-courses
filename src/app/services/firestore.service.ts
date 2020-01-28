import { Injectable } from '@angular/core';
import { AngularFirestore, docChanges, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Course } from '../course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {

  }

  getData() {
    return this.firestore.collection('courses').valueChanges({ idField: 'id' })
  }

  getRating(){
    return this.firestore.collection('courses').valueChanges({ ratingField: 'rating' })
  }

  getCollection() {
    return this.firestore.collection('courses')
  }

  getSnapshotChanges() {
    return this.firestore.collection('courses').snapshotChanges()
  }

  createData(course: Course) {
    return this.firestore.collection('courses').add(course);
  }

  deleteData(courseId: string) {
    this.firestore.doc('courses/' + courseId).delete();
  }

  getCourseDoc(courseId) {
    return this.firestore.doc('courses/' + courseId);
  }

  getUserDoc(email) {
    return this.firestore.doc('users/' + email);
  }


  
}