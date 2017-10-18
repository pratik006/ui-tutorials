import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseService {
  url = "http://localhost:8080/courses.json";
  constructor(private http: Http) { }

  getCourses():Promise<string[]> {
    return this.http.get(this.url)
    .map((resp) => (resp.json() as string[]))
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
