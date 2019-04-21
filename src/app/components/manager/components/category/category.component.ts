import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../../services/category.service';
import {Category} from '../../../../models/Category';
import {NgForm} from '@angular/forms';
import {DishService} from '../../../../services/dish.service';
import {Dish} from '../../../../models/Dish';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryes: Category[] = [];
  showAdFormB = false;
  showAddFormDish = false;
  dishImage: File = null;

  constructor(private categoryServise: CategoryService,
              public dishService: DishService
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
    console.log(this.dishImage.name);
  }

  addDish(form: NgForm) {
    if (form.valid && form.touched) {
      this.dishService.createDish(form, this.dishImage);
      form.resetForm();
      this.dishImage = null;
      setTimeout(() => {
        this.ngOnInit();
      }, this.categoryServise.updateTimeSec);
    }

  }

  showMeThis(category: Category) {
    category.show = !category.show;
  }

  changeDishStatus(dish: Dish) {
    dish.entree = !dish.entree;
    this.dishService.changeDishStatus(dish.id);
  }

  updateDish(form: NgForm) {
    if (form.valid && form.touched) {
      this.dishService.updateDish(form);
      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
    }
  }


  showChangeForm(dish: Dish, categoryName: string, form: NgForm) {
    dish.show = !dish.show;
    form.setValue({
      title: dish.title,
      about: dish.about,
      coast: dish.coast,
      id: dish.id,
      categoryName1: categoryName
    });
  }

  deleteDish(id) {
    this.categoryes.forEach(value => value.dishes.forEach(value1 => {
      if (value1.id === id) {
        value.dishes.splice(value.dishes.findIndex(value2 => value2 === value1), 1);
      }
    }));
    this.dishService.deleteDish(id);
  }

  sendNewCategory(form: NgForm) {
    if (form.valid &&
      form.touched
      && form.value.categoryName !== '' &&
      form.value.categoryImage !== '') {
      this.categoryServise.addCategory(form);
      form.resetForm();
    }
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
  }

  pasteFile(file: Event) {
    this.categoryServise.pasteFile(file);
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
  }


}
