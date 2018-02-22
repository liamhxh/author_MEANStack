import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  newQuote = {}
  author = {}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    let observabel = this._httpService.findOneAuthorByID(this._httpService.authorID)
    observabel.subscribe(data => {
      console.log(data);
      this.author = data
    })
    this.newQuote = {
      quote: "",
      votes:0
    }
    console.log(this.author['quotes'])
  }

  onSubmit() {
    this.author['quotes'].push(this.newQuote);
    this._httpService.updateOneAuthor(this._httpService.authorID, this.author).subscribe(data => {
      if (data["error"]) {
        console.log(data["error"]);
      } else {
        console.log(data)
        this._router.navigate(['/showAuthor'])
      }
    })
  }


}
