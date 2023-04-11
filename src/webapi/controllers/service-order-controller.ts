import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { IServiceOrderService } from "../../domain/interfaces/services/IServiceOrderService";

const path = "/serviceorder";
const serviceOrderController = express.Router();
const service = container.get<IServiceOrderService>(TYPES.IServiceOrderService);

serviceOrderController.post(path, async (req, res) => {
  const response = await service.createServiceOrder(req.body);
  if (response.success()) res.status(201);
  else res.status(400);

  res.json(response);
});

export { serviceOrderController };
