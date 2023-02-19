import { inject, injectable } from "inversify";
import { TYPES } from "../../infra/di/types";
import {
  BaseResponse,
  failureOnlyMessage,
  success,
} from "../common/base-response";
import { ServiceOrder } from "../entities/ServiceOrder";
import { IServiceOrderRepository } from "../interfaces/repositories/IServiceOrderRepository";
import { ICreateServiceOrderUC } from "../interfaces/usecases/ICreateServiceOrderUC";

@injectable()
export class CreateServiceOrderUC implements ICreateServiceOrderUC {
  constructor(
    @inject(TYPES.IServiceOrderRepository)
    private _notaServicoRepostory: IServiceOrderRepository
  ) {}

  async execute(serviceOrder: ServiceOrder): Promise<BaseResponse> {
    const nsByCode = await this._notaServicoRepostory.findById(
      serviceOrder.getCode()
    );

    if (nsByCode)
      return failureOnlyMessage(
        `Existe nota cadastrada com o código: ${serviceOrder.getCode()}.`
      );

    await this._notaServicoRepostory.insert(serviceOrder);

    return success(serviceOrder);
  }
}
