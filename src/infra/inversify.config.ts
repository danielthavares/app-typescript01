import { Container } from "inversify";
import { useNotaServico } from "./nota-servico.config";

const container = new Container();

useNotaServico(container);

export { container };
