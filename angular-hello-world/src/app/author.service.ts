import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
  url = "http://localhost:8080/authors.json";
  constructor(private http: Http) { }

  getAuthors():Promise<string[]> {
    return this.http.get(this.url).map(response => response.json() as string[])
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
