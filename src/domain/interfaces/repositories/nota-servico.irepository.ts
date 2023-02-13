import { NotaServico } from "../../entities/nota-servico.entity";

export interface INotaServicoRepository {
  insert(notaServico: NotaServico): Promise<NotaServico>;
  findById(code: number): Promise<NotaServico | null>;
  update(code: number, notaServico: NotaServico): Promise<number>;
  remove(code: number): Promise<number>;
  findAll(): Promise<NotaServico[]>;
}
