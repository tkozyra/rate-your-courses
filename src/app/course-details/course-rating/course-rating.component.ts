import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { RatingService } from '../../services/rating.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-rating',
  templateUrl: './course-rating.component.html',
  styleUrls: ['./course-rating.component.scss'],
  providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})


export class CourseRatingComponent implements OnInit {

  emailNotNull
  ratingsNumber

  @Input() email;
  @Input() courseId;

  ratings: Observable<any>;
  avgRating: Observable<any>;

  constructor(
    config: NgbRatingConfig,
    private ratingService: RatingService,
    private firestoreService: FirestoreService
  ) {
    config.max = 5;
    config.readonly = false;
    this.verifyEmail();
  }

  ngOnInit() {
    this.ratings = this.ratingService.getCourseRating(this.courseId);
    this.avgRating = this.ratings.pipe(map(arr => {
      const stars = arr.map(v => v.value)
      this.ratingsNumber = stars.length
      return stars.length ? stars.reduce((total, val) => total + val)/arr.length : 'Brak ocen'
    }))
    this.verifyEmail();
  }

  ratingHandler(value){
    this.ratingService.setRating(this.email, this.courseId, value)
  }

  verifyEmail(){
    if(this.email != ""){
      this.emailNotNull = true;
    }else{
      this.emailNotNull = false;
    }
  }

  ngAfterViewChecked(){
    this.verifyEmail();
  }

}
