import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { BasketComponent } from './components/user/components/basket/basket.component';
import { MenuComponent } from './components/user/components/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchResultComponent } from './components/user/components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasketComponent,
    MenuComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
