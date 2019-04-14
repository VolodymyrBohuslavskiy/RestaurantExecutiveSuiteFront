import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CategoryService} from './category.service';
import {Account1} from '../models/Account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,
              private categoryService: CategoryService) {
  }

  getAccounts(): Observable<Account1[]> {
    return this.http.get<Account1[]>(this.categoryService.path + '/get_active_accounts');
  }

  getAllAccounts(): Observable<Account1[]> {
    return this.http.get<Account1[]>(this.categoryService.path + '/get_all_accounts');
  }
  setAccountStatuse(id: number, statuse: string) {
    this.http.patch(this.categoryService.path + '/set_account_statuse', id, {headers: {newStatuse: statuse}}).subscribe();
  }
}

