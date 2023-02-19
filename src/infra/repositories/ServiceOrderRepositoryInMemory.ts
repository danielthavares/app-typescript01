import { injectable } from "inversify";
import { ServiceOrder } from "../../domain/entities/ServiceOrder";
import { IServiceOrderRepository } from "../../domain/interfaces/repositories/IServiceOrderRepository";

@injectable()
export class ServiceOrderRepositoryInMemory implements IServiceOrderRepository {
  private database: ServiceOrder[];

  constructor() {
    this.database = [];
  }

  async update(code: number, serviceOrder: ServiceOrder): Promise<number> {
    let record = await this.findById(code);

    if (record) {
      this.database = this.database.filter((x) => x.getCode() !== code);
      this.database.push(
        new ServiceOrder(
          serviceOrder.getCode(),
          serviceOrder.getDetail(),
          serviceOrder.getDate()
        )
      );

      return 1;
    }
    return 0;
  }

  async remove(code: number): Promise<number> {
    let record = await this.findById(code);

    if (record) {
      this.database = this.database.filter((x) => x.getCode() !== code);
      return 1;
    }
    return 0;
  }

  async findAll(): Promise<ServiceOrder[]> {
    return this.database;
  }

  async insert(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    const record = new ServiceOrder(
      serviceOrder.getCode(),
      serviceOrder.getDetail(),
      serviceOrder.getDate()
    );

    this.database.push(record);

    return record;
  }

  async findById(code: number): Promise<ServiceOrder | null> {
    const record = this.database.find((x) => x.getCode() === code);
    if (record) return record;
    else return null;
  }
}
