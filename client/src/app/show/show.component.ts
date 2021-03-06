import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  authors : any

  constructor( private _httpService : HttpService) { }

  ngOnInit() {
    this.showALL();
  }

  showALL(){
    let observabel = this._httpService.getAllAuthors()
    observabel.subscribe(data => {
      console.log(data);
      this.authors = data['db'].sort(data['db'].createdAt).reverse()
    })
  }

  deleteThisAuthor(authorID){
    let observabel = this._httpService.removeOneAuthor(authorID)
    observabel.subscribe(data => {})
    this.showALL()
  }

}
