import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({ name: 'semesterPipe', pure: false })

export class SemesterFilterPipe implements PipeTransform {
    transform(courses: Course[], searchNumber: Number[]): Course[] {
        if (!courses)
            return [];
        if (searchNumber.length === 0)
            return courses;
        return courses.filter(course => {
            return searchNumber.includes(course.semester.valueOf());
        });
    }
}