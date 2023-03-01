import { EnumCategory } from "../common/enumerators";

type CreateServiceOrderInput = {
  code: number;
  detail: string;
  date?: Date;
  itens: ItemInput[];
};

type ItemInput = {
  category: EnumCategory;
  description: string;
  price: number;
};

const createServiceOrderInputSymbol = Symbol();

export { CreateServiceOrderInput, ItemInput, createServiceOrderInputSymbol };
