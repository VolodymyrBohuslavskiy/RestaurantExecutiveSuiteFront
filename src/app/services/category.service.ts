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
  updateTimeSec = 10;
  image: File = null;

  constructor(
    private http: HttpClient
  ) {
  }

  getCategores(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + '/get/categoryes');
  }

  pasteFile(file) {
    this.image = file.target.files[0];
  }

  addCategory(form: NgForm) {
    const formData = new FormData();
    console.log(form.value.categoryName);
    formData.append('category', form.value.categoryName);
    formData.append('categoryImage', this.image, this.image.name);
    this.http.post(this.path + '/create/category', formData).subscribe();
  }


}
