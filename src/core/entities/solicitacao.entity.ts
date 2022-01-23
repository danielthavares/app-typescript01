
import { EnumCategoria } from "../enumeradores";
import { Desconto } from "../interfaces/desconto.interface";
import { Item } from "./item.entity";

export class Solicitacao extends Item implements Desconto {

    constructor(descricao: string, preco: number) {
        super(EnumCategoria.SOLICITACAO, descricao, preco)
    }

    getDesconto(): number {
        return this.preco * 0.05;
    }
}