import { inject, injectable } from "inversify";
import { TYPES } from "../../infra/di/types";
import { EXIST_DATA_ID } from "../common/base-messages";
import {
  BaseResponse,
  failureOnlyMessage,
  success,
} from "../common/base-response";
import { ItemOutput, ServiceOrderOutput } from "../dtos/ServiceOrderOutput";
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
      return failureOnlyMessage(EXIST_DATA_ID);

    await this._notaServicoRepostory.insert(serviceOrder);
    
    let itensOutPut: ItemOutput[] = [];

    serviceOrder.getItens().forEach(
      (i) => {
        itensOutPut.push({ category: i.getCategory(), description: i.getDescription(), price: i.getPrice() });
      }
    );  

    let output: ServiceOrderOutput = {
      code: serviceOrder.getCode(),
      detail:serviceOrder.getDetail(),
      date: serviceOrder.getDate(),
      itens: itensOutPut,
      subtotal: serviceOrder.getSubTotal(),
      tax: serviceOrder.getTax(),
      discount: serviceOrder.getDiscount(),
      total: serviceOrder.getTotal()
    };

    return success(output);
  }
}
