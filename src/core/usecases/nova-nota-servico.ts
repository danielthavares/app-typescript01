import { inject, injectable } from "inversify";
import { TYPES } from "../../infra/types";
import {
  BaseResponse,
  failureOnlyMessage,
  success,
} from "../common/base-response";
import { NotaServico } from "../entities/nota-servico.entity";
import { INotaServicoRepository } from "../interfaces/repositories/nota-servico.irepository";
import { INovaNotaServicoUseCase } from "../interfaces/usecases/nova-nota-servico.interface";

@injectable()
export class NovaNotaServicoUseCase implements INovaNotaServicoUseCase {
  constructor(
    @inject(TYPES.INotaServicoRepository)
    private _notaServicoRepostory: INotaServicoRepository
  ) {}

  async execute(notaServico: NotaServico): Promise<BaseResponse> {
    const nsByCode = await this._notaServicoRepostory.findById(
      notaServico.getCode()
    );

    if (nsByCode)
      return failureOnlyMessage(
        `Existe nota cadastrada com o código: ${notaServico.getCode()}.`
      );

    await this._notaServicoRepostory.insert(notaServico);

    return success(notaServico);
  }
}
