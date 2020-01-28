import { Component, ViewChild, AfterViewInit, OnInit, Output } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CoursesFilterComponent } from '../courses-filter/courses-filter.component'
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from '../services/firestore.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  faPlus = faPlus;

  courses: Observable<any>;


  @Output() course: Course;

  //selection
  selectedCourse: Course;
  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  constructor(private firestoreService: FirestoreService, private authService: AuthService) {
    this.user = this.authService.authState$.subscribe(user => this.user = user);
    this.getCustomUser();
  }

  @ViewChild(CoursesFilterComponent, { static: true }) filterComponent;

  selectedEcts = [];
  selectedSemester = [];
  selectedRating = [];
  selectedName = '';



  ngOnInit() {
    this.courses = this.firestoreService.getData();
  }

  deleteCourse(course): void {
    this.firestoreService.deleteData(course.id);
  }

  user
  email
  isAdmin
  userDoc
  customUser

  getEmail() {
    if (this.user) {
      this.email = this.user.email;
    } else {
      this.email = ''
    }
  }

  getCustomUser(): void {
    if (this.user) {
      this.userDoc = this.firestoreService.getUserDoc(this.email);
      this.customUser = this.userDoc.valueChanges()
      if (this.email == "admin@ryc.pl") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  }

  // update values from filter
  ngAfterContentChecked() {
    this.selectedName = this.filterComponent.selectedName;
    this.selectedEcts = this.filterComponent.selectedEcts;
    this.selectedSemester = this.filterComponent.selectedSemester;
    this.getEmail();
    this.getCustomUser();
  }


}