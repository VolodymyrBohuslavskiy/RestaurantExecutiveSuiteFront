import {Component, OnInit} from '@angular/core';
import {DishService} from '../../../../services/dish.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  constructor(private dishService: DishService) {
  }

  ngOnInit() {
  }

  buy() {
    for (const dish of this.dishService.basket) {
      console.log(dish.title);
    }
  }
}
