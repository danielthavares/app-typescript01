import { BaseResponse } from "../../common/base-response";
import { NovaNotaServicoDTO } from "../../dto/create-nota-servico.dto";

export interface INotaServicoService {
  novaNotaServico(notaServicoDTO: NovaNotaServicoDTO): Promise<BaseResponse>;
}
