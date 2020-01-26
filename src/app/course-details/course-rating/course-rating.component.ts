import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Course } from '../../course';
import { RatingService } from '../../services/rating.service';
import { CourseNewRatingComponent } from '../course-new-rating/course-new-rating.component';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.scss'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})


export class CourseRatingComponent implements OnInit {

  ctrl = new FormControl(null, Validators.required);
  currentRating: number;
  numberOfRatings: number;
  ratingReceived: number;
  rated: boolean;

  message: string;

  @Input() course: Course;

  constructor(config: NgbRatingConfig, private ratingService: RatingService) {
    config.max = 5;
    config.readonly = true;
  }

  onRatingReceived(rated: boolean) {
    if (rated) {
      this.currentRating = this.ratingService.getCurrentRating(this.course);
      this.numberOfRatings = this.ratingService.getNumberOfRatings(this.course);
    }
  }

  ngOnInit() {
    this.currentRating = this.ratingService.getCurrentRating(this.course);
    this.numberOfRatings = this.ratingService.getNumberOfRatings(this.course);
  }

  ngOnChanges(){
    this.currentRating = this.ratingService.getCurrentRating(this.course);
    this.numberOfRatings = this.ratingService.getNumberOfRatings(this.course);
  }

  // rateCourse() {

  //   this.ctrl.setErrors(null);
  //   this.ratingService.rateCourse(this.course, this.newRating);
  //   this.numberOfRatings = this.ratingService.getNumberOfRatings(this.course);
  //   this.currentRating = this.ratingService.getCurrentRating(this.course);
  // }



}
