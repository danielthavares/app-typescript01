import "reflect-metadata";
import { INotaServicoRepository } from "./core/interfaces/repositories/nota-servico.irepository";
import { container } from "./inversify.config";
import { TYPES } from "./types";

const service = container.get<INotaServicoRepository>(
  TYPES.INotaServicoRepository
);

console.info("inicio", service);
