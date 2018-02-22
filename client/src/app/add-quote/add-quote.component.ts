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
  a_id : any

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.a_id = params.id })
    this._httpService.findOneAuthorByID(this.a_id).subscribe(data => {
      this.author = data
    })
    this.newQuote = {
      quote: "",
      votes:0
    }
    console.log(this.author);
    
  }

  onSubmit() {
    this.author['quotes'].push(this.newQuote);
    this._httpService.updateOneAuthor(this.a_id, this.author).subscribe(data => {
      if (data["error"]) {
        console.log(data["error"]);
      } else {
        console.log(data)
        this._router.navigate(['/showAuthor/',this.a_id])
      }
    })
  }


}
