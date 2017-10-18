import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private courses: string[];
  constructor(private courseService: CourseService) { }

  getCourses(): void {
    this.courseService.getCourses().then(courses=>{this.courses=courses;});
  }

  ngOnInit() {
    this.getCourses();
  }

}
