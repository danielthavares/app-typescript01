
import { EnumCategoria } from "../enumeradores";
import { Imposto } from "../interfaces/imposto.interface";
import { Item } from "./item.entity";

export class Manutencao extends Item implements Imposto {
    
    constructor(descricao: string, preco: number){
        super(EnumCategoria.MANUNTENCAO, descricao, preco)
    }

    getImposto(): number {
        return this.preco * 0.05;
    }
}