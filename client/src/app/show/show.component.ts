import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  authors : {}

  constructor( private _httpService : HttpService) { }

  ngOnInit() {
    this.showALL();
  }

  showALL(){
    let observabel = this._httpService.getAllAuthors()
    observabel.subscribe(data => {
      console.log(data);
      this.authors = data['db']
    })
  }

  deleteThisAuthor(authorID){
    let observabel = this._httpService.removeOneAuthor(authorID)
    observabel.subscribe(data => {
    })
    this.showALL()
  }

  saveIDtoService(a_ID){
    this._httpService.authorID = a_ID
    console.log(a_ID)
  }

  

}
