import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../../../../services/category.service';

@Component({
  selector: 'app-add-categiory',
  templateUrl: './add-categiory.component.html',
  styleUrls: ['./add-categiory.component.css']
})
export class AddCategioryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }


  sendNewCategory(form: NgForm) {
    if (form.valid &&
      form.touched
      && form.value.categoryName !== '' &&
      form.value.categoryImage !== '') {
      this.categoryService.addCategory(form);
      form.resetForm();
    }
  }

  pasteFile(file: Event) {
    this.categoryService.pasteFile(file);
  }
}
