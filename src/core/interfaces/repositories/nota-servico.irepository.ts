import { NotaServico } from "../../entities/nota-servico.entity";

export interface INotaServicoRepository {
  insert(notaServico: NotaServico): Promise<void>;
  findByCode(code: number): Promise<NotaServico>;
}
