import { EnumCategory } from "../common/enumerators";

export class ServiceOrderOutput {
  code: number;
  detail: string;
  date?: Date;
  itens: ItemOutput[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
}

export class ItemOutput {
  category: EnumCategory;
  description: string;
  price: number;
}
