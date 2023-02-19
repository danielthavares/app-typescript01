import { date, number, object, ObjectSchema, string } from "yup";
import { CreateServiceOrderInput } from "../../domain/dtos/CreateServiceOrderInput";
import { initLocale } from "./config";

initLocale("ptBR");

const novaNotaServicoSchema: ObjectSchema<CreateServiceOrderInput> = object({
  code: number().required().integer().min(10).max(9999999999),
  detail: string().required().min(3).max(150),
  date: date().default(() => new Date()),
});

export { novaNotaServicoSchema };
