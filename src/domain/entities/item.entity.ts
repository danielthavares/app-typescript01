import { EnumCategoria } from "../common/enumeradores";

export abstract class Item {
  categoria: EnumCategoria;
  descricao: string;
  preco: number;

  constructor(categoria: EnumCategoria, descricao: string, preco: number) {
    this.categoria = categoria;
    this.descricao = descricao;
    this.preco = preco;
  }
}
