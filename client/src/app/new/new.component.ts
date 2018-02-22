import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service"
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author = {};
  constructor(
    private _httpService : HttpService,
    private _route :ActivatedRoute,
    private _router : Router
  ) {}

  ngOnInit() {
    this.author = {name : "", quotes:[]}
  }

  onSubmit(){
    let observable = this._httpService.addNewAuthor(this.author)
    observable.subscribe(data => {
      console.log('got data from post', data)
      this.author = {name:"", quotes : []};
      this._router.navigate(['/show'])
    })
  }

}
