import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Enrollment {
  email: string;
  courseId: any;
  enrolled: number;
}

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {

  constructor(private firestore: AngularFirestore) { }

  getUserEnrollment(email) {
    const enrollmentsRef = this.firestore.collection('enrollments', ref => ref.where(
      'email', '==', email
    ));
    return enrollmentsRef.valueChanges();
  }

  getCourseEnrollment(courseId) {
    const enrollmentsRef = this.firestore.collection('enrollments', ref => ref.where(
      'courseId', '==', courseId
    ));
    return enrollmentsRef.valueChanges();
  }

  setEnrollment(email, courseId, enrolled) {
    const enrollment: Enrollment = { email, courseId, enrolled };
    const enrollmentEmail = enrollment.email;
    const enrollmentCourseId = enrollment.courseId;
    const enrollmentPath = 'enrollments/' + enrollmentEmail + '_' + enrollmentCourseId;
    return this.firestore.doc(enrollmentPath).set(enrollment);
  }

  // getEnrollment(email, courseId, enrolled) {
  //   let a = false;
  //   const enrollment: Enrollment = { email, courseId, enrolled };
  //   const enrollmentEmail = enrollment.email;
  //   const enrollmentCourseId = enrollment.courseId;
  //   const enrollmentPath = 'enrollments/' + enrollmentEmail + '_' + enrollmentCourseId;
  //   return this.firestore.doc(enrollmentPath).get().forEach(a =>{
  //     if(a.email == email)
  //   })
  // }



}
