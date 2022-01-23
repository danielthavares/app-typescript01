import { CreateNotaServicoDTO } from "../core/dto/create-nota-servico.dto";
import { NotaServico } from "../core/entities/nota-servico.entity";
import { NovaNotaServicoUseCase } from "../core/usecases/nova-nota-servico";

export class NotaServicoController {

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