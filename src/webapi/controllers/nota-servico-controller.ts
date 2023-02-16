import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { INotaServicoService } from "../../domain/interfaces/services/nota-servico.interface";
import { novaNotaServicoSchema } from "../validations/create-nota-servico-dto.validation";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<INotaServicoService>(TYPES.INotaServicoService);

notaServicoController.post(path, async (req, res) => {
  try {
    const validate = await novaNotaServicoSchema.validate(req.body);
    const response = await service.novaNotaServico(validate);
    if (response.success()) res.status(201);
    else res.status(400);

    res.json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

export { notaServicoController };
