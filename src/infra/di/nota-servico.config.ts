import { Container } from "inversify";
import { TYPES } from "./types";
import { INotaServicoRepository } from "../../core/interfaces/repositories/nota-servico.irepository";
import { INovaNotaServicoUseCase } from "../../core/interfaces/usecases/nova-nota-servico.interface";
import { NovaNotaServicoUseCase } from "../../core/usecases/nova-nota-servico";
import { INotaServicoService } from "../../core/interfaces/services/nota-servico.interface";
import { NotaServicoService } from "../../core/service/nota-servico.service";
import { NotaServicoMemoryRepository } from ".././repositories/nota-servico-memory.repository";

export function useNotaServico(container: Container) {
  container
    .bind<INotaServicoRepository>(TYPES.INotaServicoRepository)
    .to(NotaServicoMemoryRepository);

  container
    .bind<INovaNotaServicoUseCase>(TYPES.INovaNotaServicoUseCase)
    .to(NovaNotaServicoUseCase);

  container
    .bind<INotaServicoService>(TYPES.INotaServicoService)
    .to(NotaServicoService);
}
