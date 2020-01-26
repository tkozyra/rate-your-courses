import { Component, OnInit, Input, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Course } from '../../course';
import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-course-new-rating',
  templateUrl: './course-new-rating.component.html',
  styleUrls: ['./course-new-rating.component.scss']
})
export class CourseNewRatingComponent implements OnInit {

  ctrl = new FormControl(null, Validators.required);
  @Input() course: Course;
  @Output() rated = new EventEmitter<boolean>();

  rating: number;
  currentRating: number;
  ratingSubmitted: boolean;

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  turnOff() {
    this.ctrl.disable();
  }

  constructor(config: NgbRatingConfig, private ratingService: RatingService) {
    config.max = 5;
    config.readonly = false;
  }

  rateCourse(rating){
    this.ratingService.rateCourse(this.course, rating);
    this.rated.emit(true);
    this.ratingSubmitted = true;
  }

  ngOnInit() {
    this.rating = 0;
    this.currentRating = 0;
    this.ratingSubmitted = false;
  }

}
