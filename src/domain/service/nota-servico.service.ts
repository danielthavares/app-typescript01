import { inject, injectable } from "inversify";
import { BaseResponse } from "../common/base-response";
import { NovaNotaServicoDTO } from "../dto/create-nota-servico.dto";
import { NotaServico } from "../entities/nota-servico.entity";
import { INotaServicoService } from "../interfaces/services/nota-servico.interface";
import { INovaNotaServicoUseCase } from "../interfaces/usecases/nova-nota-servico.interface";
import { TYPES } from "../../infra/di/types";

@injectable()
export class NotaServicoService implements INotaServicoService {
  constructor(
    @inject(TYPES.INovaNotaServicoUseCase)
    private _novaNotaServicoUC: INovaNotaServicoUseCase
  ) {}
  async novaNotaServico(
    notaServicoDTO: NovaNotaServicoDTO
  ): Promise<BaseResponse> {
    let model = new NotaServico(
      notaServicoDTO.code,
      notaServicoDTO.detail,
      notaServicoDTO.date
    );
    const result = await this._novaNotaServicoUC.execute(model);
    return result;
  }
}
