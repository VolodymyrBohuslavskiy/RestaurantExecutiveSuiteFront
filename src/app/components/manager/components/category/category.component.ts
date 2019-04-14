import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryes: Category[] = [];


  constructor(private categoryServise: CategoryService,
  ) {
  }

  ngOnInit() {
    this.categoryServise.getCategores().subscribe(categ => this.categoryes = categ);
  }

}
