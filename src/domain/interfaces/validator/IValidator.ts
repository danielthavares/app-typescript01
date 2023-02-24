import { BaseResponse } from "../../common/base-response";

export interface IValidator {
  validate(validable: Symbol, input: any): Promise<BaseResponse>;
}
