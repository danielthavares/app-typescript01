import { ObjectSchema } from "yup";
import { createServiceOrderInputSymbol } from "../../../domain/dtos/CreateServiceOrderInput";
import { createServiceOrderSchema } from "./create-service-order-schema";

export const schemas = new Map<Symbol, ObjectSchema<any>>();

schemas.set(createServiceOrderInputSymbol, createServiceOrderSchema);
