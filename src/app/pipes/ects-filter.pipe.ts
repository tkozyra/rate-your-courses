import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../course';

@Pipe({ name: 'ectsPipe', pure: false })

export class EctsFilterPipe implements PipeTransform {
    transform(courses: Course[], searchNumber: Number[]): Course[] {
        if (!courses)
            return [];
        if (searchNumber.length === 0)
            return courses;
            // searchNumber = searchNumber.valueOf();
        return courses.filter(course => {
            // return course.ects.valueOf() == (searchNumber);
            return searchNumber.includes(course.ects.valueOf());
        });
    }
}