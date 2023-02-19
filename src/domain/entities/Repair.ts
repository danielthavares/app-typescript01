import { EnumCategory } from "../common/enumerators";
import { Tax } from "../interfaces/entities/Tax";
import { Item } from "./Item";

export class Repair extends Item implements Tax {
  constructor(description: string, price: number) {
    super(EnumCategory.REPAIR, description, price);
  }

  getTax(): number {
    return this.getPrice() * 0.09;
  }
}
