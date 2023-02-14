import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { novaNotaServicoSchema } from "./schemas/create-nota-servico-dto.validation";

export const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

//add schemas
ajv.addSchema(novaNotaServicoSchema, "novaNotaServicoSchema");
