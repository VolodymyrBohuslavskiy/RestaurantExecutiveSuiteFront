import {Dish} from './Dish';

export class Account1 {

  constructor(
    public id?: number,
    public date?: Date,
    public accountStatuse?: string,
    public dishList?: Dish[],
  ) {
  }
}
