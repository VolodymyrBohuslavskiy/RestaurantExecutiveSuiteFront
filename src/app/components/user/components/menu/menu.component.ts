import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Dish} from '../../../../../models/Dish';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../../models/Category';
import {DishService} from '../../../../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categoryes: Category[] = [];

  path = 'http://127.0.0.1:8887/';

  constructor(
    private categoryService: CategoryService,
    private dishService: DishService
  ) {
  }

  onlyEntree() {
    for (const category of this.categoryes) {
      for (const dish of category.dishes) {
        category.dishes.splice(category.dishes.findIndex(value => value.entree === false), 1);
      }
    }
  }

  ngOnInit() {
    this.categoryService.getCategores().subscribe(categoryes => {
      this.categoryes = categoryes;
      this.onlyEntree();
    });
  }


  sendSearchForm(form: NgForm) {
    if (form.valid && form.touched) {
      this.dishService.find(form.value.SearchWord).subscribe();
      form.resetForm();
    }
  }

  showDishes(category: Category) {
    category.show = !category.show;
  }
}
