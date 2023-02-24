import { Container } from "inversify";
import { IValidator } from "../../domain/interfaces/validator/IValidator";
import { Validator } from "../validator/Validator";
import { TYPES } from "./types";

export function useValidator(container: Container) {
  container.bind<IValidator>(TYPES.IValidator).to(Validator).inSingletonScope();
}
