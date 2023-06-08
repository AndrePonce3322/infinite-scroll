import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CardComponent } from './Components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CardComponent, SearchBarComponent],
  imports: [BrowserModule, InfiniteScrollModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
