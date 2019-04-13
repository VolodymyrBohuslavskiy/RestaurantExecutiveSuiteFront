import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {Account1} from '../../../../models/Account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account1[] = [];

  constructor(
    private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    setTimeout(() => {
      this.ngOnInit();
    }, 10 * 1000);
  }


  setAccountStatuse(id: number, statuse: string) {
    this.accountService.setAccountStatuse(id, statuse);
  }

  submit(id: number) {
    const statuse = 'SUBMITTED';
    const one = this.accounts.find(a => a.id === id);
    one.accountStatuse = statuse;
    this.setAccountStatuse(id, statuse);
  }

  pay(id: number) {
    const statuse = 'PAID';
    this.accounts.splice(this.accounts.findIndex(a => a.id === id), 1);
    this.setAccountStatuse(id, 'PAID');
  }


}
