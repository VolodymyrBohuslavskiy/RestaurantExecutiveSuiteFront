import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DishService} from '../../services/dish.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bascet = false;

  constructor(
    private dishService: DishService
  ) {
  }

  ngOnInit() {
  }

  sendSearchForm(form: NgForm) {
    if (form.valid && form.touched) {
      this.dishService.find(form.value.SearchWord).subscribe();
      form.resetForm();
    }
  }

  showBascet() {
    this.bascet = true;
  }

  hideBascet() {
    this.bascet = false;
  }


}
