import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Dish} from '../../models/Dish';
import {CategoryService} from './category.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {
  }

  find(searchWord: string): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.categoryService.path + '/find_dish', {params: {word: searchWord}});
  }
}
