import {Dish} from './Dish';

export class Category {

  constructor(
    public   id?: string,
    public categoryName?: string,
    public categoryImage?: string,
    public dishes?: Dish[]
  ) {
  }
}
