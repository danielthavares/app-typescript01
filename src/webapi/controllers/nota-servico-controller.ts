import express from "express";
import { TYPES } from "../../infra/di/types";
import { container } from "../../infra/di/inversify.config";
import { IServiceOrderService } from "../../domain/interfaces/services/IServiceOrderService";
import { createServiceOrderSchema } from "../validations/schemas";

const path = "/notaservico";
const notaServicoController = express.Router();
const service = container.get<IServiceOrderService>(TYPES.IServiceOrderService);

notaServicoController.post(path, async (req, res) => {
  try {
    const validate = await createServiceOrderSchema.validate(req.body);
    const response = await service.createServiceOrder(validate);
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
