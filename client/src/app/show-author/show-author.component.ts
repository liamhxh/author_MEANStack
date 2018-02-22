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
  a_id : any

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {this.a_id = params.id})
    this._httpService.findOneAuthorByID(this.a_id).subscribe(data => {
      this.author = data
    })
  }

  // showAll(){
  //   this._httpService.findOneAuthorByID(this.a_id).subscribe(data => {
  //     this.author = data
  //   })
  // }

  upvote(i){
    this.author["quotes"][i].votes += 1;
    this._httpService.updateOneAuthor(this.a_id, this.author).subscribe()
  }
  
  downvote(i){
    this.author["quotes"][i].votes -= 1;
    this._httpService.updateOneAuthor(this.a_id, this.author).subscribe()
  }
  deleteQuote(i){
    this.author["quotes"].splice(i,1);
    this._httpService.updateOneAuthor(this.a_id, this.author).subscribe()
  }

}
