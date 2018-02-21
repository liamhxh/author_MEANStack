import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  // {path: "alpha" , component : AlphaComponent},
  // {path: "beta" , component : BetaComponent}
  {path: 'new', component: NewComponent},
  {path: 'show', component: ShowComponent},
  {path: 'edit', component: EditComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '', pathMatch:"full", redirectTo:"/show"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
