import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from '../models/Dish';
import {CategoryService} from './category.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  basket: Dish[] = [];
  searchDishes: Dish[] = [];


  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {
  }

  find(searchWord: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.categoryService.path + '/find_dish', {params: {word: searchWord}});
  }

  sendOrder() {
    if (this.basket.length !== 0) {
      this.http.post(this.categoryService.path + '/add_account', JSON.stringify(this.basket)).subscribe();
      this.basket.splice(0, this.basket.length);
    }
  }

}
