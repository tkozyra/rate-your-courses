import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNewRatingComponent } from './course-new-rating.component';

describe('CourseNewRatingComponent', () => {
  let component: CourseNewRatingComponent;
  let fixture: ComponentFixture<CourseNewRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNewRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
