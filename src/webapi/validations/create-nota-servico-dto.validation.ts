import { date, number, object, ObjectSchema, string } from "yup";
import { NovaNotaServicoDTO } from "../../domain/dto/create-nota-servico.dto";

export const novaNotaServicoSchema: ObjectSchema<NovaNotaServicoDTO> = object({
  code: number().required().integer().min(10).max(9999999999),
  detail: string().required().min(3).max(150),
  date: date().default(() => new Date()),
});
