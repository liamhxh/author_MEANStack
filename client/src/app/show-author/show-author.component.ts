import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.css']
})
export class ShowAuthorComponent implements OnInit {

  author = {}
  quotes = []

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.findOneAuthorByID(this._httpService.authorID).subscribe(data => {
      this.author = data
    })
  }

  upvote(i){
    this.author["quotes"][i].votes += 1;
    this._httpService.updateOneAuthor(this._httpService.authorID, this.author).subscribe(data => {
      this.author = data
    })
    this._httpService.findOneAuthorByID(this._httpService.authorID).subscribe(data => {
      this.author = data
    })
  }
  downvote(i){
    this.author["quotes"][i].votes -= 1;
    this._httpService.updateOneAuthor(this._httpService.authorID, this.author).subscribe(data => {
      this.author = data
    })
    this._httpService.findOneAuthorByID(this._httpService.authorID).subscribe(data => {
      this.author = data
    })
  }
  deleteQuote(i){
    this.author["quotes"].splice(i,1);
    this._httpService.updateOneAuthor(this._httpService.authorID, this.author).subscribe(data => {
      this.author = data
    })
    this._httpService.findOneAuthorByID(this._httpService.authorID).subscribe(data => {
      this.author = data
    })
  }

}
