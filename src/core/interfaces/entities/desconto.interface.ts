interface Desconto {
    getDesconto(): number;
}

const instanceOfDesconto = (data: any): data is Desconto =>
    'getDesconto' in data;


export {
    Desconto, instanceOfDesconto
}