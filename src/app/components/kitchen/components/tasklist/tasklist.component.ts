import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../../services/account.service';
import {Account1} from '../../../../models/Account';
import {CategoryService} from '../../../../services/category.service';
import {DishService} from '../../../../services/dish.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Account1[] = [];

  constructor(private accountService: AccountService,
              private categoryService: CategoryService,
              private dishService: DishService) {

  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(value => this.tasks = value);
    setTimeout(() => {
      this.ngOnInit();
    }, 1000 * this.categoryService.updateTimeSec);
  }

  setStatus(status: string, id: number) {
    const account1 = this.tasks.find(value => value.id === id);
    account1.accountStatuse = status;
    return status;
  }


  preparing(id: number) {
    this.accountService.setAccountStatuse(id, this.setStatus('PREPARING', id));
  }

  ready(id: number) {
    this.accountService.setAccountStatuse(id, this.setStatus('READY', id));
  }
}
