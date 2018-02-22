import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowAuthorComponent } from './show-author/show-author.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';



@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    ShowComponent,
    DeleteComponent,
    ShowAuthorComponent,
    AddQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
