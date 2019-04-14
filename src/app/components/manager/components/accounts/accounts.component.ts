import {Component, OnInit} from '@angular/core';
import {Account1} from '../../../../models/Account';
import {AccountService} from '../../../../services/account.service';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Account1[] = [];

  constructor(private accountService: AccountService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.accountService.getAllAccounts().subscribe(value => this.accounts = value);

    setTimeout(() => {
      this.ngOnInit();
    }, this.categoryService.updateTimeSec * 1000);

  }

}
