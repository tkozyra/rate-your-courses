import { Injectable } from '@angular/core';
import { Course } from '../course';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor() { }

  rateCourse(course : Course, rating : number){
    course.numberOfRatings = course.numberOfRatings + 1;
    course.rating = course.rating + rating;
  }

  getNumberOfRatings(course : Course) : number{
    return course.numberOfRatings;
  }

  getCurrentRating(course : Course) : number{
    return course.rating / course.numberOfRatings;
  }

}
