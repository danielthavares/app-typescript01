import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { INotaServicoService } from "../../domain/interfaces/services/nota-servico.interface";
import { NovaNotaServicoDTO } from "../../domain/dto/create-nota-servico.dto";
import { validate } from "./core/validation.helper";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<INotaServicoService>(TYPES.INotaServicoService);

notaServicoController.post(
  path,
  (req, res, next) => {
    validate<NovaNotaServicoDTO>(req, res, next, "novaNotaServicoSchema");
  },
  async (req, res) => {
    try {
      const response = await service.novaNotaServico(req.body);
      if (response.success()) res.status(201);
      else res.status(400);

      res.json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

export { notaServicoController };
