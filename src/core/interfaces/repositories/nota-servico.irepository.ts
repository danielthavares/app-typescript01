import { NotaServico } from "../../entities/nota-servico.entity";

export interface INotaServicoRepository {

    save(notaServico: NotaServico): Promise<void>;
    getByCode(code: number): Promise<NotaServico>;
}