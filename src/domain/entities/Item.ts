import { EnumCategory } from "../common/enumerators";

export abstract class Item {
  private category: EnumCategory;
  private description: string;
  private price: number;

  constructor(category: EnumCategory, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }

  getCategory(): EnumCategory {
    return this.category;
  }

  getDescription(): string{
    return this.description
  }

  getPrice(): number{
    return this.price;
  }
}
