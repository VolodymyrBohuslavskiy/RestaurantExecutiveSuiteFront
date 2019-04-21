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
  searchResult = false;
  menu = true;
  showAdninNav = false;


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
    this.dishService.getBasketSum();
    this.bascet = true;
    this.searchResult = false;
    this.menu = false;
  }

  hideBascet() {
    this.bascet = false;
    this.menu = true;
    this.searchResult = false;
  }


  showAdmin() {
    this.showAdninNav = !this.showAdninNav;
  }

  logOut() {
    console.log('clear local storage');
  }

  showSearchComponent() {
    this.searchResult = true;
  }
}
