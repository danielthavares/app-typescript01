import { injectable } from "inversify";
import { NotaServico } from "../../domain/entities/nota-servico.entity";
import { INotaServicoRepository } from "../../domain/interfaces/repositories/nota-servico.irepository";

@injectable()
export class NotaServicoRepository implements INotaServicoRepository {
  update(code: number, notaServico: NotaServico): Promise<number> {
    throw new Error("Method not implemented.");
  }
  remove(code: number): Promise<number> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<NotaServico[]> {
    throw new Error("Method not implemented.");
  }
  insert(notaServico: NotaServico): Promise<NotaServico> {
    throw new Error("Method not implemented.");
  }
  findById(code: number): Promise<NotaServico> {
    throw new Error("Method not implemented.");
  }
}
