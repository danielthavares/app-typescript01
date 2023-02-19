import { ServiceOrder } from "../../entities/ServiceOrder";

export interface IServiceOrderRepository {
  insert(serviceOrder: ServiceOrder): Promise<ServiceOrder>;
  findById(code: number): Promise<ServiceOrder | null>;
  update(code: number, serviceOrder: ServiceOrder): Promise<number>;
  remove(code: number): Promise<number>;
  findAll(): Promise<ServiceOrder[]>;
}
