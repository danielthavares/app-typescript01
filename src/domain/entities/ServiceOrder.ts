import { Item } from "./Item";
import { instanceOfTax } from "../interfaces/entities/Tax";
import { instanceOfDiscount } from "../interfaces/entities/Discount";

export class ServiceOrder {
  private _code: number;
  private _detail: string;
  private _date?: Date;
  private _itens: Item[];

  constructor(code: number, detail: string, date?: Date) {
    this._code = code;
    this._detail = detail;
    this._date = date;
    this._itens = [];
  }

  addItem(item: Item) {
    this._itens.push(item);
  }

  getCode() {
    return this._code;
  }

  getDetail() {
    return this._detail;
  }

  getDate() {
    return this._date;
  }

  getItens() {
    return this._itens;
  }

  getSubTotal() {
    let total = this._itens
      .map((i) => i.getPrice())
      .reduce((acc, value) => {
        acc = acc + value;
        return acc;
      });
    return Number(total.toFixed(2));
  }

  getTax() {
    let tax = 0;
    this._itens.forEach((i) => {
      if (instanceOfTax(i)) tax += i.getTax();
    });
    return Number(tax.toFixed(2));
  }

  getDiscount() {
    let discount = 0;
    this._itens.forEach((i) => {
      if (instanceOfDiscount(i)) discount += i.getDiscount();
    });
    return Number(discount.toFixed(2));
  }

  getTotal() {
    return this.getSubTotal() + this.getTax() - this.getDiscount();
  }
}
