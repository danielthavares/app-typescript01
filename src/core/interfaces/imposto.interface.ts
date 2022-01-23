interface Imposto {
    getImposto(): number;
}

const instanceOfImposto = (data: any): data is Imposto =>
    'getImposto' in data;


export {
    Imposto, instanceOfImposto
}