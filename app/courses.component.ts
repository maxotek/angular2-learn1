import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {TruthDirective} from './truth.directive'

@Component({
    selector: "courses",
    template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow style="width: 120" />
    <label truth text="Click here">
    &lt;&lt;&lt;&lt;Click here to reveal a truth&gt;&gt;&gt;&gt;
    </label>
    <ul>
        <li *ngFor="#course of courses">{{ course}}</li>
    </ul>
    `,
     providers: [CourseService],
     directives: [AutoGrowDirective, TruthDirective]
})
export class CoursesComponent {
    title = "The title of courses page";
    courses: string[];
  		  
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}