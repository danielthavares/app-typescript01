import { injectable } from "inversify";
import { NotaServico } from "../../domain/entities/nota-servico.entity";
import { INotaServicoRepository } from "../../domain/interfaces/repositories/nota-servico.irepository";

@injectable()
export class NotaServicoMemoryRepository implements INotaServicoRepository {
  private _database: NotaServico[];

  constructor() {
    this._database = [];
  }

  async update(code: number, notaServico: NotaServico): Promise<number> {
    let record = await this.findById(code);

    if (record) {
      this._database = this._database.filter((x) => x.getCode() !== code);
      this._database.push(
        new NotaServico(notaServico.getCode(), notaServico.getDetail())
      );

      return 1;
    }
    return 0;
  }

  async remove(code: number): Promise<number> {
    let record = await this.findById(code);

    if (record) {
      this._database = this._database.filter((x) => x.getCode() !== code);
      return 1;
    }
    return 0;
  }

  async findAll(): Promise<NotaServico[]> {
    return this._database;
  }

  async insert(notaServico: NotaServico): Promise<NotaServico> {
    const record = new NotaServico(
      notaServico.getCode(),
      notaServico.getDetail()
    );

    this._database.push(record);

    return record;
  }

  async findById(code: number): Promise<NotaServico | null> {
    const record = this._database.find((x) => x.getCode() === code);
    if (record) return record;
    else return null;
  }
}
