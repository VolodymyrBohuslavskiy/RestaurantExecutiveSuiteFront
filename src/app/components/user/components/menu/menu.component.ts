import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Dish} from '../../../../models/Dish';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishess: Dish[] = [new Dish(1, 'ololololol'), new Dish(2, 'QQQ'), new Dish(3, 'Zero')];
  categoryes: Category[] = [new Category(null, 'Test Category')];
  sowThisCategory = false;

  path = 'http://127.0.0.1:8887/';

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categoryService.getCategores().subscribe(category => this.categoryes = category);
  }

  sendSurchForm(form: NgForm) {
    if (form.valid && form.touched) {
      console.log(form.value.surchWord);
      form.resetForm();
    }
  }

  showDishes(category: Category) {
    this.sowThisCategory = !this.sowThisCategory;
    console.log(category.categoryName);
    console.log(this.sowThisCategory);
  }
}
