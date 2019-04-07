import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DishService} from '../../services/dish.service';
import {Dish} from '../../models/Dish';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  bascet = false;
  searchResult = false;
  menu = true;


  constructor(
    private dishService: DishService
  ) {
  }

  ngOnInit() {
  }

  sendSearchForm(form: NgForm) {
    if (form.valid && form.touched && form.value.SearchWord !== '') {
      this.dishService.find(form.value.SearchWord).subscribe(reqestDishes => this.dishService.searchDishes = reqestDishes);
      form.resetForm();
      this.searchResult = true;
      this.menu = false;
      this.bascet = false;
    }
  }

  showBascet() {
    this.bascet = true;
    this.searchResult = false;
    this.menu = false;
  }

  hideBascet() {
    this.bascet = false;
    this.menu = true;
    this.searchResult = false;
  }


}
