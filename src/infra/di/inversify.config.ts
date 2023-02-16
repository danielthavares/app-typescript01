import { Container } from "inversify";
import { useNotaServico } from "./nota-servico.config";

export const container = new Container();

useNotaServico(container);
