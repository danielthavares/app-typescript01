import { ObjectSchema } from "yup";
import { IValidator } from "../../domain/interfaces/validator/IValidator";
import { NO_SCHEMA, NO_VALIDATE } from "../../domain/common/base-messages";
import {
  BaseResponse,
  failure,
  failureOnlyMessage,
  success,
} from "../../domain/common/base-response";
import { initLocale } from "./core/validator.config";
import { injectable } from "inversify";
import { registerSchemas } from "./schemas/register-schemas";

@injectable()
export class Validator implements IValidator {
  private _schemas: Map<Symbol, ObjectSchema<any>>;

  constructor() {
    initLocale("keys");
    this._schemas = registerSchemas();
  }

  async validate(validable: Symbol, input: any): Promise<BaseResponse> {
    const validator = this._schemas.get(validable);

    if (!validator) return failureOnlyMessage(NO_SCHEMA);

    try {
      return success(await validator.validate(input));
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        error.hasOwnProperty("name") &&
        error["name"] === "ValidationError"
      ) {
        const objectErro = {};
        objectErro[error["path"]] = error["errors"];
        return failure(null, undefined, objectErro);
      } else {
        return failureOnlyMessage(
          typeof error === "string" ? error : NO_VALIDATE
        );
      }
    }
  }
}
