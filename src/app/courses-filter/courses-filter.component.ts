import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../course';


@Component({
  selector: 'app-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.scss']
})


export class CoursesFilterComponent implements OnInit {

  @Input() courses: Course[];

  dropdownSettings = {};

  dropdownEctsList = [];
  dropdownSemesterList = [];
  dropdownRatingList = [];

  selectedEcts = [];
  selectedSemester = [];
  selectedRating = [];
  selectedName = '';

  nothingFound : Boolean;

  ngOnInit() {
    // nothingFound = false;

    this.dropdownEctsList = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.dropdownSemesterList = [1,2,3,4,5,6,7];
    this.dropdownRatingList = [1,2,3,4,5];

    this.dropdownSettings = {
      singleSelection: false,
      itemsShowLimit: 20,
      allowSearchFilter: false,
      enableCheckAll: false
    };
  }
  onEctsItemSelect(item: any) {
    this.selectedEcts.push(item);
  }

  onEctsItemDeSelect(item: any){
    const index = this.selectedEcts.indexOf(item, 0);
    this.selectedEcts.splice(index, 1);
  }

  onSemesterItemSelect(item: any) {
    this.selectedSemester.push(item);
  }

  onSemesterItemDeSelect(item: any){
    const index = this.selectedSemester.indexOf(item, 0);
    this.selectedSemester.splice(index, 1);
  }
}
