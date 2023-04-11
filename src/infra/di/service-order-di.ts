import { Container } from "inversify";
import { TYPES } from "./types";
import { IServiceOrderRepository } from "../../domain/interfaces/repositories/IServiceOrderRepository";
import { ICreateServiceOrderUC } from "../../domain/interfaces/usecases/ICreateServiceOrderUC";
import { CreateServiceOrderUC } from "../../domain/usecases/CreateServiceOrderUC";
import { IServiceOrderService } from "../../domain/interfaces/services/IServiceOrderService";
import { ServiceOrderService } from "../../domain/services/ServiceOrderService";
import { ServiceOrderRepositoryInMemory } from "../repositories/ServiceOrderRepositoryInMemory";

export function useServiceOrder(container: Container) {
  container
    .bind<IServiceOrderRepository>(TYPES.IServiceOrderRepository)
    .to(ServiceOrderRepositoryInMemory);

  container
    .bind<ICreateServiceOrderUC>(TYPES.ICreateServiceOrderUC)
    .to(CreateServiceOrderUC);

  container
    .bind<IServiceOrderService>(TYPES.IServiceOrderService)
    .to(ServiceOrderService);
}
