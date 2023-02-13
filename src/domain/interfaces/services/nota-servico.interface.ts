import { BaseResponse } from "../../common/base-response";
import { CreateNotaServicoDTO } from "../../dto/create-nota-servico.dto";

export interface INotaServicoService {
  createNotaServico(
    notaServicoDTO: CreateNotaServicoDTO
  ): Promise<BaseResponse>;
}
