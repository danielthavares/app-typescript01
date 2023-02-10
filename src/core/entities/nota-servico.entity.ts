import { Item } from "./item.entity";
import { instanceOfImposto } from "../interfaces/imposto.interface";
import { instanceOfDesconto } from "../interfaces/desconto.interface";

export class NotaServico {
  private code: number;
  private detail: string;
  private itens: Item[];

  constructor(code: number, detail: string) {
    this.code = code;
    this.detail = detail;
    this.itens = [];
  }

  addItem(item: Item) {
    this.itens.push(item);
  }

  getCode() {
    return this.code;
  }

  getDetail() {
    return this.detail;
  }

  getSubTotal() {
    let total = this.itens
      .map((i) => i.preco)
      .reduce((acc, value) => {
        acc = acc + value;
        return acc;
      });
    return Number(total.toFixed(2));
  }

  getImposto() {
    let imposto = 0;
    this.itens.forEach((i) => {
      if (instanceOfImposto(i)) imposto += i.getImposto();
    });
    return Number(imposto.toFixed(2));
  }

  getDesconto() {
    let desconto = 0;
    this.itens.forEach((i) => {
      if (instanceOfDesconto(i)) desconto += i.getDesconto();
    });
    return Number(desconto.toFixed(2));
  }

  getTotal() {
    return this.getSubTotal() + this.getImposto() - this.getDesconto();
  }
}
