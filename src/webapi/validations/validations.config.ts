import { createNotaServicoDTO } from "./schemas/create-nota-servico-dto.validation";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

export const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

//add schemas
ajv.addSchema(createNotaServicoDTO, "createNotaServicoDTO");
