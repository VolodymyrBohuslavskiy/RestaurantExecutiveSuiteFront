import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../models/Category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {
  }

  getCategores(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path + '/get_categoryes');
  }
}
