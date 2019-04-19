import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';
import {NgForm} from '@angular/forms';
import {DishService} from '../../../../services/dish.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryes: Category[] = [];
  showAdFormB = false;
  dishImage: File = null;

  constructor(private categoryServise: CategoryService,
              private dishService: DishService
  ) {
  }

  ngOnInit() {
    this.categoryServise.getCategores().subscribe(categ => this.categoryes = categ);
  }

  showAddForm() {
    this.showAdFormB = !this.showAdFormB;
  }

  setImage(event) {
    this.dishImage = event.target.files[0];
  }

  addDish(form: NgForm) {
    if (form.valid && form.touched) {
      this.dishService.createDish(form, this.dishImage);
      form.resetForm();

      setTimeout(() => {
        this.ngOnInit();
      }, this.categoryServise.updateTimeSec);
    }

  }

  showMeThis(category: Category) {
    category.show = !category.show;
  }
}
