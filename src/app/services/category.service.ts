import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path = 'http://localhost:8080';
  imageServer = 'http://127.0.0.1:8887/';

  constructor(
    private http: HttpClient
  ) {
  }

  getCategores(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + '/get_categoryes');
  }


  addCategory(form: NgForm, $event: {}) {
    const formData = new FormData();
    formData.append('category', JSON.stringify(new Category().categoryName = form.value.categoryName));
    formData.append('categoryImage', null);
    this.http.post(this.path + '/create_category', formData).subscribe();
  }
}
