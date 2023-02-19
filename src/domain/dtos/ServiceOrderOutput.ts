import { EnumCategory } from "../common/enumerators";

export type ServiceOrderOutput = {
  code: number;
  detail: string;
  date?: Date;
  itens: ItemOutput[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
}

export type ItemOutput = {
  category: EnumCategory;
  description: string;
  price: number;
}