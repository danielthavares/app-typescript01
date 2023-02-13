import { BaseResponse } from "../../common/base-response";
import { NotaServico } from "../../entities/nota-servico.entity";

export interface INovaNotaServicoUseCase {
  execute(notaServico: NotaServico): Promise<BaseResponse>;
}
