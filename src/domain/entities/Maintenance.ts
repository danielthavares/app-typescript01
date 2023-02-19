import { EnumCategory } from "../common/enumerators";
import { Tax } from "../interfaces/entities/Tax";
import { Item } from "./Item";

export class Maintenance extends Item implements Tax {
  constructor(description: string, price: number) {
    super(EnumCategory.MAINTENANCE, description, price);
  }

  getTax(): number {
    return this.getPrice() * 0.05;
  }
}
