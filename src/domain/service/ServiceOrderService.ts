import { inject, injectable } from "inversify";
import { BaseResponse } from "../common/base-response";
import { CreateServiceOrderInput } from "../dtos/CreateServiceOrderInput";
import { ServiceOrder } from "../entities/ServiceOrder";
import { IServiceOrderService } from "../interfaces/services/IServiceOrderService";
import { ICreateServiceOrderUC } from "../interfaces/usecases/ICreateServiceOrderUC";
import { TYPES } from "../../infra/di/types";

@injectable()
export class ServiceOrderService implements IServiceOrderService {
  constructor(
    @inject(TYPES.ICreateServiceOrderUC)
    private _createServiceOrderUC: ICreateServiceOrderUC
  ) {}
  async createServiceOrder(
    input: CreateServiceOrderInput
  ): Promise<BaseResponse> {
    let model = new ServiceOrder(
      input.code,
      input.detail,
      input.date
    );
    return await this._createServiceOrderUC.execute(model);
  }
}
