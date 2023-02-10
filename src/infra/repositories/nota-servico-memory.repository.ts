import { injectable } from "inversify";
import { NotaServico } from "../../core/entities/nota-servico.entity";
import { INotaServicoRepository } from "../../core/interfaces/repositories/nota-servico.irepository";

@injectable()
export class NotaServicoMemoryRepository implements INotaServicoRepository {
  private _database: NotaServico[];

  constructor() {
    this._database = [];
  }

  update(code: number, notaServico: NotaServico): Promise<number> {
    let record = this.findById(code);

    if (record) {
      this._database = this._database.filter((x) => x.getCode() !== code);
      this._database.push(
        new NotaServico(notaServico.getCode(), notaServico.getDetail())
      );

      return Promise.resolve(1);
    }
    return Promise.resolve(0);
  }

  remove(code: number): Promise<number> {
    let record = this.findById(code);

    if (record) {
      this._database = this._database.filter((x) => x.getCode() !== code);
      return Promise.resolve(1);
    }
    return Promise.resolve(0);
  }

  findAll(): Promise<NotaServico[]> {
    return Promise.resolve(this._database);
  }

  insert(notaServico: NotaServico): Promise<NotaServico> {
    const record = new NotaServico(
      notaServico.getCode(),
      notaServico.getDetail()
    );
    this._database.push(record);
    return Promise.resolve(record);
  }

  findById(code: number): Promise<NotaServico> {
    const record = this._database.find((x) => x.getCode() === code);
    return Promise.resolve(record);
  }
}
