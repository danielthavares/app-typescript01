import { Item } from "./item.entity";
import { instanceOfImposto } from "../interfaces/entities/imposto.interface";
import { instanceOfDesconto } from "../interfaces/entities/desconto.interface";

export class NotaServico {
  private code: number;
  private detail: string;
  private itens: Item[];
  private date: string;

  constructor(code: number, detail: string, date: string) {
    this.code = code;
    this.detail = detail;
    this.itens = [];
    this.date = date;
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

  getDate() {
    return this.date;
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
