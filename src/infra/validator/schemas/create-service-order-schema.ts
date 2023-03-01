import { array, date, mixed, number, object, ObjectSchema, string } from "yup";
import { EnumCategory } from "../../../domain/common/enumerators";
import {
  CreateServiceOrderInput,
  ItemInput,
} from "../../../domain/dtos/CreateServiceOrderInput";
import { initLocale } from "../core/validator.config";

initLocale("keys");

const itemSchema: ObjectSchema<ItemInput> = object({
  category: mixed<EnumCategory>().oneOf(Object.values(EnumCategory)).required(),
  description: string().required().min(3).max(100),
  price: number().required().positive().default(0),
});

const createServiceOrderSchema: ObjectSchema<CreateServiceOrderInput> = object({
  code: number().required().integer().min(10).max(9999999999),
  detail: string().required().min(3).max(150),
  date: date().default(() => new Date()),
  itens: array().of(itemSchema).min(1).required(),
});

export { createServiceOrderSchema };
