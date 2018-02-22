import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import {ShowAuthorComponent} from './show-author/show-author.component'
import {AddQuoteComponent} from './add-quote/add-quote.component'



const routes: Routes = [
  {path: 'new', component: NewComponent},
  {path: 'show', component: ShowComponent},
  {path: 'edit', component: EditComponent},
  {path: 'showAuthor/:id', component: ShowAuthorComponent},
  {path: 'addQuote/:id', component: AddQuoteComponent},
  {path: '', pathMatch:"full", redirectTo:"/show"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
