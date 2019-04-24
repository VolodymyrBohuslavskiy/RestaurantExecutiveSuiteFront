import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from '../models/Dish';
import {CategoryService} from './category.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Category} from '../models/Category';

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

  // find(searchWord: string): Observable<Dish[]> {
  //   return this.http.get<Dish[]>(this.categoryService.path + '/find_dish', {params: {word: searchWord}});
  // }

  find(searchWord: string): Dish[] {
    const searchRes: Dish[] = [];
    this.categoryService.getCategores().forEach(c => c.forEach(c1 =>
      c1.dishes.forEach(d => {
        if (d.about.includes(searchWord) || d.title.includes(searchWord)) {
          d.categoryName = c1.categoryName;
          this.searchDishes.push(d);
          searchRes.push(d);
        }
      })));
    return searchRes;
  }


  getBasketSum(): number {
    let sum = 0;
    for (const basketElement of this.basket) {
      sum = sum + basketElement.coast;
    }
    return sum;
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
    const dish = new Dish(form.value.id, form.value.title, form.value.about, dishImage.name, form.value.entree, form.value.coast);
    console.log(JSON.stringify(dish));
    formData.append('dish', JSON.stringify(dish));
    formData.append('categoryName', form.value.categoryName);
    formData.append('image', dishImage);
    this.http.post(this.categoryService.path + '/add_dish', formData).subscribe();
  }

  changeDishStatus(id: number) {
    this.http.patch(this.categoryService.path + '/update/dish/status', id).subscribe();
  }


  updateDish(form: NgForm) {
    const formData = new FormData();
    const dish = new Dish(form.value.id, form.value.title, form.value.about, null, form.value.entree, form.value.coast);
    const categoryName = form.value.categoryName1;
    console.log(JSON.stringify(dish));
    console.log(categoryName);
    formData.append('dish', JSON.stringify(dish));
    formData.append('categoryName', categoryName);
    this.http.patch(this.categoryService.path + '/update/dish', formData).subscribe();
  }

  deleteDish(id) {
    this.http.delete(this.categoryService.path + '/delete/dish', {params: {deleteId: id}}).subscribe();
  }


}

