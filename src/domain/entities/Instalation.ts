import { EnumCategory } from "../common/enumerators";
import { Discount } from "../interfaces/entities/Discount";
import { Item } from "./Item";

export class Instalation extends Item implements Discount {
  constructor(description: string, price: number) {
    super(EnumCategory.INSTALATION, description, price);
  }

  getDiscount(): number {
    return this.getPrice() * 0.05;
  }
}
