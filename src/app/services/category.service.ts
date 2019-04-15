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
  updateTimeSec = 1000;
  image: File = null;

  constructor(
    private http: HttpClient
  ) {
  }

  getCategores(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + '/get_categoryes');
  }

  pasteFile(file) {
    this.image = file.target.files[0];
  }

  addCategory(form: NgForm) {
    const formData = new FormData();

    formData.append('category', form.value.categoryName);
    formData.append('categoryImage', this.image, this.image.name);
    this.http.post(this.path + '/create_category', formData).subscribe();
  }


}
