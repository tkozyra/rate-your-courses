import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;


  faAngleLeft = faAngleLeft;
  rated: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCourse();
    this.rated = false;
  }

  onRatingReceived(rated: boolean){
    if(rated){
      this.rated = true;
    }
  }

  getCourse(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
    
  }
}
