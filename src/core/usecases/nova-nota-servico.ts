import { failureOnlyMessage, success } from "../common/base-response";
import { NotaServico } from "../entities/nota-servico.entity";
import { INotaServicoRepository } from "../interfaces/repositories/nota-servico.irepository";

export class NovaNotaServicoUseCase {

    notaServicoRepostory: INotaServicoRepository;

    constructor(notaServicoRepostory: INotaServicoRepository) {
        this.notaServicoRepostory = notaServicoRepostory
    }

    async execute(notaServico: NotaServico) {

        const nsByCode = await this.notaServicoRepostory.getByCode(notaServico.code);

        if(nsByCode) return failureOnlyMessage(`Existe nota cadastrada com o código: ${notaServico.code}.`);

        await this.notaServicoRepostory.save(notaServico);

        return success(notaServico);
    }
}