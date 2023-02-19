import { ServiceOrder } from "../src/domain/entities/ServiceOrder";
import { Instalation } from "../src/domain/entities/Instalation";
import { Maintenance } from "../src/domain/entities/Maintenance";
import { Repair } from "../src/domain/entities/Repair";

test("should calculate the service order subtotal", function () {
  const notaServico = new ServiceOrder(
    Date.now(),
    "Prestação de servico para o cliente José"
  );
  notaServico.addItem(new Instalation("Instalação de ponto de luz", 45.0));
  notaServico.addItem(new Maintenance("Verificando de ponto de luz", 15.0));
  notaServico.addItem(
    new Repair("Conserto de ponto de luz terceiros", 125.99)
  );
  const subTotal = notaServico.getSubTotal();
  expect(subTotal).toBe(185.99);
});

test("should calculate the service order tax", function () {
  const notaServico = new ServiceOrder(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Instalation("Instalação de ponto de luz", 45.0)); // nada de imposto
  notaServico.addItem(new Maintenance("Verificando de ponto de luz", 15.0)); // 0.05 de imposto 0,75
  notaServico.addItem(
    new Repair("Conserto de ponto de luz terceiros", 125.99)
  ); // 0.09 de imposto 11,3391
  const imposto = notaServico.getTax();
  expect(imposto).toBe(12.09);
});

test("should calculate the service order discount", function () {
  const notaServico = new ServiceOrder(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Instalation("Instalação de ponto de luz", 45.0)); // desconto de 0.05
  notaServico.addItem(new Maintenance("Verificando de ponto de luz", 15.0));
  notaServico.addItem(
    new Repair("Conserto de ponto de luz terceiros", 125.99)
  );
  const desconto = notaServico.getDiscount();
  expect(desconto).toBe(2.25);
});

test("should calculate the service order total", function () {
  const notaServico = new ServiceOrder(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Instalation("Instalação de ponto de luz", 45.0)); // desconto de 0.05
  notaServico.addItem(new Maintenance("Verificando de ponto de luz", 15.0)); // 0.05 de imposto 0,75
  notaServico.addItem(
    new Repair("Conserto de ponto de luz terceiros", 125.99)
  ); // 0.09 de imposto 11,3391
  const total = notaServico.getTotal();
  expect(total).toBe(195.83);
});
