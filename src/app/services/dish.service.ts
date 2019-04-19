import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from '../models/Dish';
import {CategoryService} from './category.service';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  basket: Dish[] = [];
  searchDishes: Dish[] = [];
  imgPath = 'http://127.0.0.1:8887/';

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

  createDish(form: NgForm, file: File) {
    const dishImage: File = file;
    const formData = new FormData();
    const dish = new Dish(null, form.value.title, form.value.about, dishImage.name, form.value.entree, form.value.coast);
    console.log(JSON.stringify(dish));
    formData.append('dish', JSON.stringify(dish));
    formData.append('categoryName', form.value.categoryName);
    formData.append('image', dishImage);
    this.http.post(this.categoryService.path + '/add_dish', formData).subscribe();
  }
}

