import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {Account1} from '../../../../models/Account';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account1[] = [];

  constructor(
    private accountService: AccountService,  private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    setTimeout(() => {
      this.ngOnInit();
    }, this.categoryService.updateTimeSec * 1000);
  }


  setAccountStatuse(id: number, statuse: string) {
    this.accountService.setAccountStatuse(id, statuse);
  }

  submit(id: number) {
    const status = 'SUBMITTED';
    const one = this.accounts.find(a => a.id === id);
    one.accountStatuse = status;
    this.setAccountStatuse(id, status);
  }

  pay(id: number) {
    const status = 'PAID';
    this.accounts.splice(this.accounts.findIndex(a => a.id === id), 1);
    this.setAccountStatuse(id, status);
  }


}
