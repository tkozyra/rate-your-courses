import { Pipe, PipeTransform } from '@angular/core';
// import { Course } from './course';

@Pipe({ name: 'namePipe', pure: false })

export class FilterPipe implements PipeTransform {
    transform(courses: any[], searchText: string): any[] {
        if (!courses)
            return [];
        if (!searchText)
            return courses;
        searchText = searchText.toLowerCase();
        return courses.filter(course => {
            return course.name.toLowerCase().includes(searchText);
        });
    }
}