import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { ajv } from "../validations/validations.config";
import { INotaServicoService } from "../../domain/interfaces/services/nota-servico.interface";
import { CreateNotaServicoDTO } from "../../domain/dto/create-nota-servico.dto";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<INotaServicoService>(TYPES.INotaServicoService);

function inputValidate(req: any, res: any, next: () => void) {
  const validate = ajv.getSchema<CreateNotaServicoDTO>("createNotaServicoDTO");

  if (validate && !validate(req.body)) {
    res.status(400).json(validate.errors);
    return;
  }

  next();
}

notaServicoController.post(path, inputValidate, async (req, res) => {
  try {
    const response = await service.createNotaServico(req.body);
    if (response.success()) res.status(201);
    else res.status(400);

    res.json(response);
  } catch (error) {
    res.status(400).json(error);
  }
});

export { notaServicoController };
