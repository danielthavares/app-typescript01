import { Container } from "inversify";
import { useServiceOrder } from "./servicer-order-di";
import { useValidator } from "./validator-di";

export const container = new Container();

useValidator(container);
useServiceOrder(container);
