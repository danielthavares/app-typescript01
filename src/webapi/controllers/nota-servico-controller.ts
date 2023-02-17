import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { INotaServicoService } from "../../domain/interfaces/services/nota-servico.interface";
import { novaNotaServicoSchema } from "../validations/schemas";

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
    // TODO refatorar
    if (error && typeof error === "object") {
      if (error.hasOwnProperty("name") && error["name"] === "ValidationError") {
        let data = {
          failures: {},
        };
        data.failures[error["path"]] = error["errors"];
        res.status(400).json(data);
        return;
      }
    }
    res.status(400).json(error);
  }
});

export { notaServicoController };
