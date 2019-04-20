export class Dish {

  public show: boolean;
  public categoryName: string;

  constructor(
    public id?: number,
    public  title?: string,
    public  about?: string,
    public  image?: string,
    public  entree?: boolean,
    public  coast?: number
  ) {
  }
}
