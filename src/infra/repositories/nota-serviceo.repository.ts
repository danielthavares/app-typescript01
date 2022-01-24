import { injectable } from "inversify";
import { NotaServico } from "../../core/entities/nota-servico.entity";
import { INotaServicoRepository } from "../../core/interfaces/repositories/nota-servico.irepository";

@injectable()
class NotaServicoRepository implements INotaServicoRepository{

    save(notaServico: NotaServico): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getByCode(code: number): Promise<NotaServico> {
        throw new Error("Method not implemented.");
    }
}

export {NotaServicoRepository}