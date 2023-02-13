import { NotaServico } from "../src/domain/entities/nota-servico.entity";
import { Solicitacao } from "../src/domain/entities/solicitacao.entity";
import { Manutencao } from "../src/domain/entities/manutencao.entity";
import { Reparacao } from "../src/domain/entities/reparacao.entity";

test("deve calcular o sub total da nota de serviço", function () {
  const notaServico = new NotaServico(
    Date.now(),
    "Prestação de servico para o cliente José"
  );
  notaServico.addItem(new Solicitacao("Instalação de ponto de luz", 45.0));
  notaServico.addItem(new Manutencao("Verificando de ponto de luz", 15.0));
  notaServico.addItem(
    new Reparacao("Conserto de ponto de luz terceiros", 125.99)
  );
  const subTotal = notaServico.getSubTotal();
  expect(subTotal).toBe(185.99);
});

test("deve calcular o imposto cobrado na nota de serviço", function () {
  const notaServico = new NotaServico(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Solicitacao("Instalação de ponto de luz", 45.0)); // nada de imposto
  notaServico.addItem(new Manutencao("Verificando de ponto de luz", 15.0)); // 0.05 de imposto 0,75
  notaServico.addItem(
    new Reparacao("Conserto de ponto de luz terceiros", 125.99)
  ); // 0.09 de imposto 11,3391
  const imposto = notaServico.getImposto();
  expect(imposto).toBe(12.09);
});

test("deve calcular o desconto da nota de serviço", function () {
  const notaServico = new NotaServico(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Solicitacao("Instalação de ponto de luz", 45.0)); // desconto de 0.05
  notaServico.addItem(new Manutencao("Verificando de ponto de luz", 15.0));
  notaServico.addItem(
    new Reparacao("Conserto de ponto de luz terceiros", 125.99)
  );
  const desconto = notaServico.getDesconto();
  expect(desconto).toBe(2.25);
});

test("deve calcular o total cobrado na nota de serviço", function () {
  const notaServico = new NotaServico(
    Date.now(),
    "Prestação de servico para o cliente João"
  );
  notaServico.addItem(new Solicitacao("Instalação de ponto de luz", 45.0)); // desconto de 0.05
  notaServico.addItem(new Manutencao("Verificando de ponto de luz", 15.0)); // 0.05 de imposto 0,75
  notaServico.addItem(
    new Reparacao("Conserto de ponto de luz terceiros", 125.99)
  ); // 0.09 de imposto 11,3391
  const total = notaServico.getTotal();
  expect(total).toBe(195.83);
});
