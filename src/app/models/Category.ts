import {Dish} from './Dish';

export class Category {
  public show = false;

  constructor(
    public   id?: string,
    public categoryName?: string,
    public categoryImage?: string,
    public dishes?: Dish[]
  ) {
  }
}
