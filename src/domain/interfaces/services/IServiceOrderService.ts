import { BaseResponse } from "../../common/base-response";
import { CreateServiceOrderInput } from "../../dtos/CreateServiceOrderInput";

export interface IServiceOrderService {
  createServiceOrder(input: CreateServiceOrderInput): Promise<BaseResponse>;
}
