import { BaseResponse } from "../../common/base-response";
import { ServiceOrder } from "../../entities/ServiceOrder";

export interface ICreateServiceOrderUC {
  execute(serviceOrder: ServiceOrder): Promise<BaseResponse>;
}
