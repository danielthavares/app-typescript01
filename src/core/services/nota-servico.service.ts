import { CreateNotaServicoDTO } from "../dto/create-nota-servico.dto";
import { NotaServico } from "../entities/nota-servico.entity";
import { NovaNotaServicoUseCase } from "../usecases/nova-nota-servico";

export class NotaServicoService {

    novaNotaServicoUC: NovaNotaServicoUseCase;

    constructor(novaNotaServicoUC: NovaNotaServicoUseCase) {
        this.novaNotaServicoUC = novaNotaServicoUC;
    }

    async novaNotaServico(notaServico: CreateNotaServicoDTO) {
        let model = new NotaServico(notaServico.code, notaServico.detail);
        const result = await this.novaNotaServicoUC.execute(model);
        return result;
    }
}