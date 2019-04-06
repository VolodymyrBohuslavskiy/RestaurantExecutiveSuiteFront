import {Component, OnInit} from '@angular/core';
import {DishService} from '../../../../services/dish.service';
import {Dish} from '../../../../../models/Dish';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  showbtn = false;

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
    if (this.dishService.basket.length > 0) {
      this.showbtn = true;
    }
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
  }

  buy() {
    this.dishService.sendOrder();
  }

  deleteDish(dish: Dish) {
    this.dishService.basket.splice(this.dishService.basket.findIndex(value => value === dish), 1);
    if (this.dishService.basket.length === 0) {
      this.showbtn = false;
    }
  }
}
