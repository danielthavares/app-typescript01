import { NotaServico } from "../entities/nota-servico.entity";

export interface NotaServicoRepository {

    save(notaServico: NotaServico): Promise<void>;
    getByCode(code: number): Promise<NotaServico>;
}