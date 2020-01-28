import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  typesOfActivity: string[] = [
    'Wykład',
    'Ćwiczenia',
    'Laboratoria',
    'Projekt'
  ]
  // successAlert = SuccessAlertComponent;
  successMessage = "Dodano nowy kurs";
  successMessageShown = false;

  constructor(private courseService: CourseService, private firestoreService: FirestoreService) { }

  myForm: FormGroup;
  name: FormControl;
  ects: FormControl;
  semester: FormControl;
  participantsLimit: FormControl;
  activityType: FormControl;
  description: FormControl;

  wantsToAddCourse = false;

  faPlus = faPlus;

  showHideForm() {
    this.wantsToAddCourse = !this.wantsToAddCourse;
    this.myForm.reset();
  }

  resetForm(){
    this.myForm.reset();
  }

  showSuccessMessage() {
    this.successMessageShown = !this.successMessageShown;
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required),
      this.ects = new FormControl('', [Validators.required, Validators.max(30), Validators.min(1)]),
      this.semester = new FormControl('', [Validators.required, Validators.max(12), Validators.min(1)]),
      this.participantsLimit = new FormControl('', [Validators.required, Validators.max(999), Validators.min(1)]),
      this.activityType = new FormControl('', Validators.required),
      this.description = new FormControl('', Validators.required)
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      ects: this.ects,
      semester: this.semester,
      participantsLimit: this.participantsLimit,
      activityType: this.activityType,
      description: this.description
    });
  }

  model: Course

  onSubmit() {
    if (this.myForm.valid) {
      // console.log("Form Submitted!");

      this.model = {
        name: this.name.value,
        ects: this.ects.value,
        semester: this.semester.value,
        participantsLimit: this.participantsLimit.value,
        activityType: this.activityType.value,
        description: this.description.value,
        rating: 0,
        numberOfRatings: 0
      }

      this.myForm.reset();
      this.showHideForm();
      this.showSuccessMessage();

      this.firestoreService.createData(this.model);
    }
  }
}