import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  authorID : any

  constructor(private _http : HttpClient) { }

  getAllAuthors(){
    return this._http.get('/authors');
  }

  addNewAuthor(author){
    return this._http.post('/authors', author)
  }

  removeOneAuthor(authorID){
    return this._http.delete('/authors/'+authorID)
  }

  findOneAuthorByID(authorID){
    return this._http.get('/authors/'+authorID)
  }

  updateOneAuthor(authorID,author){
    return this._http.put('/authors/'+authorID, author)
  }

  

}
