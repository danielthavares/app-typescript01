import { Item } from "./Item";
import { instanceOfTax } from "../interfaces/entities/Tax";
import { instanceOfDiscount } from "../interfaces/entities/Discount";

export class ServiceOrder {
  private code: number;
  private detail: string;
  private date?: Date;
  private itens: Item[];

  constructor(code: number, detail: string, date?: Date) {
    this.code = code;
    this.detail = detail;
    this.date = date;
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

  getDate() {
    return this.date;
  }

  getItens() {
    return this.itens;
  }

  getSubTotal() {
    let total = this.itens
      .map((i) => i.getPrice())
      .reduce((acc, value) => {
        acc = acc + value;
        return acc;
      });
    return Number(total.toFixed(2));
  }

  getTax() {
    let tax = 0;
    this.itens.forEach((i) => {
      if (instanceOfTax(i)) tax += i.getTax();
    });
    return Number(tax.toFixed(2));
  }

  getDiscount() {
    let discount = 0;
    this.itens.forEach((i) => {
      if (instanceOfDiscount(i)) discount += i.getDiscount();
    });
    return Number(discount.toFixed(2));
  }

  getTotal() {
    return this.getSubTotal() + this.getTax() - this.getDiscount();
  }
}
