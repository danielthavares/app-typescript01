import express from "express";
import { CreateNotaServicoDTO } from "../../core/dto/create-nota-servico.dto";
import { INotaServicoService } from "../../core/interfaces/services/nota-servico.interface";
import { container } from "../../infra/di/inversify.config";
import { TYPES } from "../../infra/di/types";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<INotaServicoService>(TYPES.INotaServicoService);

notaServicoController.post(path, async (req, res) => {
  let input = new CreateNotaServicoDTO();
  input.code = req.body.code;
  input.detail = req.body.detail;
  const response = await service.createNotaServico(input);

  if (response.success()) {
    res.status(201).json(response);
  } else {
    res.status(400).json(response);
  }
});

export { notaServicoController };
