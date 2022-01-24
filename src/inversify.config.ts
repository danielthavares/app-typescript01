import { Container } from "inversify";
import { TYPES } from "./types";
import { INotaServicoRepository } from "./core/interfaces/repositories/nota-servico.irepository"
import { NotaServicoRepository } from "./infra/repositories/nota-serviceo.repository";

const myContainer = new Container();

myContainer.bind<INotaServicoRepository>(TYPES.INotaServicoRepository).to(NotaServicoRepository);

export {
    myContainer,
}