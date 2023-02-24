import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { IServiceOrderService } from "../../domain/interfaces/services/IServiceOrderService";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<IServiceOrderService>(TYPES.IServiceOrderService);

notaServicoController.post(path, async (req, res) => {
  const response = await service.createServiceOrder(req.body);
  if (response.success()) res.status(201);
  else res.status(400);

  res.json(response);
});

export { notaServicoController };
