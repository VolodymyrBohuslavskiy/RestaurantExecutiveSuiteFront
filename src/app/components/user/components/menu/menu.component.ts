import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: string[] = ['Напої', 'Салати', 'Супи'];

  constructor() {

  }

  ngOnInit() {
  }

  sendSurchForm(form: NgForm) {
    console.log(form.value.surchWord);
    form.resetForm();
  }
}
