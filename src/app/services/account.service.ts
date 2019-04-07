import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CategoryService} from './category.service';
import {Account1} from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,
              private categoryService: CategoryService) {
  }

  getAccounts(): Observable<Account1[]> {
    return this.http.get<Account1[]>(this.categoryService.path + '/get_all_accounts');
  }

  // submit(id: number) {
  //   this.http.patch(this.categoryService.path + '/submit', id, {headers: {action: 'SUBMITTED'}}).subscribe();
  // }
  //
  // pay(id: number) {
  //   this.http.patch(this.categoryService.path + '/pay', id, {headers: {action: 'PAID'}}).subscribe();
  // }

  setAccountStatuse(id: number, statuse: string) {
    this.http.patch(this.categoryService.path + '/set_account_statuse', id, {headers: {newStatuse: statuse}}).subscribe();
  }
}

