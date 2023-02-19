import { Container } from "inversify";
import { useServiceOrder } from "./servicer-order-di";

export const container = new Container();

useServiceOrder(container);
