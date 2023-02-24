import { EnumCategory } from "../common/enumerators";

export abstract class Item {
  private _category: EnumCategory;
  private _description: string;
  private _price: number;

  constructor(category: EnumCategory, description: string, price: number) {
    this._category = category;
    this._description = description;
    this._price = price;
  }

  getCategory(): EnumCategory {
    return this._category;
  }

  getDescription(): string {
    return this._description;
  }

  getPrice(): number {
    return this._price;
  }
}
