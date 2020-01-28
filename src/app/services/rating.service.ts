import { Injectable } from '@angular/core';
import { Course } from '../course';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirestoreService } from './firestore.service';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

export interface Rating {
  email: any;
  courseId: any;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private firestore: AngularFirestore) { }

  getUserRating(email) {
    const ratingsRef = this.firestore.collection('ratings', ref => ref.where('email', '==', email));
    return ratingsRef.valueChanges();
  }

  getCourseRating(courseId) {
    const ratingsRef = this.firestore.collection('ratings', ref => ref.where(
      'courseId', '==', courseId));
    return ratingsRef.valueChanges();
  }

  setRating(email, courseId, value){
    const rating: Rating = {email, courseId, value};
    const ratingEmail = rating.email;
    const ratingCourseId = rating.courseId;
    const ratingPath = 'ratings/' + ratingEmail + '_' + ratingCourseId;
    return this.firestore.doc(ratingPath).set(rating);
  }
}