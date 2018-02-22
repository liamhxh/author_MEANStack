import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  author = {};
  a_id : any

  constructor(
    private _httpService : HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => { this.a_id = params.id })
    this._httpService.findOneAuthorByID(this.a_id).subscribe(data => {
      this.author = data
    })
  }

  onSubmit(){
    this._httpService.updateOneAuthor(this.a_id, this.author).subscribe(data =>{
      if(data["error"]){
        console.log(data["error"]);
      }else{
        console.log(data['db'])
        this._router.navigate(['/show'])
      }
    })
  }



}
