import { Component, ViewChild, AfterViewInit, OnInit, Output } from '@angular/core';
import { COURSES } from '../mock-courses';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CoursesFilterComponent } from '../courses-filter/courses-filter.component'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  faPlus = faPlus;

  courses: Course[];
  @Output() course: Course;

  //selection
  selectedCourse: Course;
  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  constructor(private courseService: CourseService) { }

  @ViewChild(CoursesFilterComponent, { static: true }) filterComponent;

  selectedEcts = [];
  selectedSemester = [];
  selectedRating = [];
  selectedName = '';


  
  ngOnInit() {
    this.getCourses();
  }

  // update values from filter
  ngAfterContentChecked(){
    this.selectedName = this.filterComponent.selectedName;
    this.selectedEcts = this.filterComponent.selectedEcts;
    this.selectedSemester = this.filterComponent.selectedSemester;
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  deleteCourse(course: Course): void {
    this.courseService.deleteCourse(course);
  }

}
