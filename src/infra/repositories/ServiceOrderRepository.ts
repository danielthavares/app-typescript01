import { injectable } from "inversify";
import { ServiceOrder } from "../../domain/entities/ServiceOrder";
import { IServiceOrderRepository } from "../../domain/interfaces/repositories/IServiceOrderRepository";

@injectable()
export class ServiceOrderRepository implements IServiceOrderRepository {
  update(code: number, serviceOrder: ServiceOrder): Promise<number> {
    throw new Error("Method not implemented.");
  }
  remove(code: number): Promise<number> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<ServiceOrder[]> {
    throw new Error("Method not implemented.");
  }
  insert(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    throw new Error("Method not implemented.");
  }
  findById(code: number): Promise<ServiceOrder> {
    throw new Error("Method not implemented.");
  }
}
