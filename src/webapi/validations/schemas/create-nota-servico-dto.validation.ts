import { JSONSchemaType } from "ajv";
import { NovaNotaServicoDTO } from "../../../domain/dto/create-nota-servico.dto";

export const novaNotaServicoSchema: JSONSchemaType<NovaNotaServicoDTO> = {
  type: "object",
  properties: {
    code: { type: "integer", minimum: 1, maximum: 999999999 },
    detail: { type: "string", minLength: 3, maxLength: 150 },
    date: { type: "string", minLength: 24, maxLength: 24 },
  },
  required: ["code", "detail", "date"],
  additionalProperties: false,
};
