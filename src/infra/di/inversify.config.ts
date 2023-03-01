import { Container } from "inversify";
import { useServiceOrder } from "./service-order-di";
import { useValidator } from "./validator-di";

export const container = new Container();

useValidator(container);
useServiceOrder(container);
