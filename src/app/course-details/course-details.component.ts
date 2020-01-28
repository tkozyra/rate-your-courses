import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FirestoreService } from '../services/firestore.service';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course : Observable<any>;
  private courseDoc: AngularFirestoreDocument;

  faAngleLeft = faAngleLeft;
  rated: boolean;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private location: Location,
    private authService: AuthService
  ) {
    this.user = this.authService.authState$.subscribe(user => this.user = user);
  }

  courseId
  email
  user


  getEmail(){
    if(this.user){
      this.email = this.user.email;
    }else{
      this.email = ''
    }
  }

  ngOnInit() {
    this.getEmail();
    this.getCourse();
    this.rated = false;
  }

  onRatingReceived(rated: boolean){
    if(rated){
      this.rated = true;
    }
  }

  getCourse(): void {
    const id = this.route.snapshot.paramMap.get('id');    
    this.courseId = id;
    this.courseDoc = this.firestoreService.getCourseDoc(id);
    this.course = this.courseDoc.valueChanges();
  }

  goBack(): void {
    this.location.back();
  }
}
