import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  private authors: string[];
  constructor(private authorService: AuthorService) { }
  
  ngOnInit() {
    this.authorService.getAuthors().then(authors=>{this.authors=authors;});
  }

}
