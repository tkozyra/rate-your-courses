import { Injectable } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses';
import { Observable, of } from 'rxjs';
import { FirebaseFirestore } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { 
  }


  // for mock data source
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  // getCourse(id: number): Observable<Course> {
  //   return of(COURSES.find(course => course.id === id));
  // }

  getCourse(id: number): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }

  deleteCourse(course: Course): void {
    COURSES.splice(COURSES.indexOf(course), 1);
  }

  addCourse(course: Course): void {
    COURSES.push(course);
  }

  
  //

  /*
  The CourseService could get course data from anywhere—a web service, local storage, or a mock data source.
  */
}
