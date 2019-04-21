import {Component, OnInit} from '@angular/core';
import {DishService} from '../../../../services/dish.service';
import {Dish} from '../../../../models/Dish';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
  }


  addInBascet(dish: Dish) {
    this.dishService.basket.push(dish);
  }
}
