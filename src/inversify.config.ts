import { Container } from "inversify";
import { TYPES } from "./types";
import { INotaServicoRepository } from "./core/interfaces/repositories/nota-servico.irepository";
import { NotaServicoRepository } from "./infra/repositories/nota-servico.repository";

const container = new Container();

container
  .bind<INotaServicoRepository>(TYPES.INotaServicoRepository)
  .to(NotaServicoRepository);

export { container };
