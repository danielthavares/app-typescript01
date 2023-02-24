import { EnumCategory } from "../common/enumerators";

class CreateServiceOrderInput {
  code: number;
  detail: string;
  date?: Date;
  itens: ItemInput[];
}

class ItemInput {
  category: EnumCategory;
  description: string;
  price: number;
}

const createServiceOrderInputSymbol = Symbol();

export { CreateServiceOrderInput, ItemInput, createServiceOrderInputSymbol };
