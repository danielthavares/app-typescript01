import { EnumCategory } from "../common/enumerators";

type ServiceOrderOutput = {
  code: number;
  detail: string;
  date?: Date;
  itens: ItemOutput[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
};

type ItemOutput = {
  category: EnumCategory;
  description: string;
  price: number;
};

export { ServiceOrderOutput, ItemOutput };
