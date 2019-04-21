import {Component, OnInit} from '@angular/core';
import {DishService} from '../../../../services/dish.service';
import {Dish} from '../../../../models/Dish';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  showbtn = false;
  constructor(private dishService: DishService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    if (this.dishService.basket.length > 0) {
      this.showbtn = true;
    }
    setTimeout(() => {
      this.ngOnInit();
    }, this.categoryService.updateTimeSec);
  }


  buy() {
    this.dishService.sendOrder();
    this.showbtn = false;
  }

  deleteDish(dish: Dish) {
    this.dishService.basket.splice(this.dishService.basket.findIndex(value => value === dish), 1);
    if (this.dishService.basket.length === 0) {
      this.showbtn = false;
    }
  }
}
