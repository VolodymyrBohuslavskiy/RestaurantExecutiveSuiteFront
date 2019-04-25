import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {BasketComponent} from './components/user/components/basket/basket.component';
import {MenuComponent} from './components/user/components/menu/menu.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchResultComponent} from './components/user/components/search-result/search-result.component';
import {WaiterComponent} from './components/waiter/waiter/waiter.component';
import {AccountListComponent} from './components/waiter/components/account-list/account-list.component';
import {KitchenComponent} from './components/kitchen/kitchen.component';
import {TasklistComponent} from './components/kitchen/components/tasklist/tasklist.component';
import {ManagerComponent} from './components/manager/manager.component';
import {CategoryComponent} from './components/manager/components/category/category.component';
import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent } from './components/manager/components/accounts/accounts.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HelloComponent } from './components/hello/hello/hello.component';
import { LoginComponent } from './components/hello/components/login/login.component';
import { RegeditComponent } from './components/hello/components/regedit/regedit.component';


const routes: Routes = [
  {path: 'categories', component: CategoryComponent},
  {path: 'allAccounts', component: AccountsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasketComponent,
    MenuComponent,
    SearchResultComponent,
    WaiterComponent,
    AccountListComponent,
    KitchenComponent,
    TasklistComponent,
    ManagerComponent,
    CategoryComponent,

    AccountsComponent,

    HelloComponent,

    LoginComponent,

    RegeditComponent,

  ],
  imports: [
    BrowserModule, NgxPaginationModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
