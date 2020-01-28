import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  emailNotNull
  enrollmentsNumber
  a: Observable<any>;
  enrolled: boolean

  userEnrollments: Observable<any>;

  @Input() email;
  @Input() courseId;

  enrollments: Observable<any>;

  constructor(
    private enrollmentService: EnrollmentService
  ) {
    this.verifyEmail();

  }

  ngOnInit() {
    this.enrollments = this.enrollmentService.getCourseEnrollment(this.courseId);
    if (this.email) {
      this.userEnrollments = this.enrollmentService.getUserEnrollment(this.email)
    }

    this.enrolled = false
    this.a = this.enrollments.pipe(map(arr => {
      const stars = arr.map(v => v.email)
      stars.forEach(v => {
        if (v == this.email) {
          this.enrolled = true
        }
      })
      this.enrollmentsNumber = stars.length
      return 0
    }))


    this.verifyEmail();
  }

  enrollForCourse() {
    this.enrollmentService.setEnrollment(this.email, this.courseId, 1)
  }

  verifyEmail() {
    if (this.email != "" && this.email) {
      this.emailNotNull = true;
    } else {
      this.emailNotNull = false;
    }
  }

  ngAfterViewChecked() {
    this.verifyEmail();
  }
}
