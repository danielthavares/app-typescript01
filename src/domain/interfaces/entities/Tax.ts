interface Tax {
    getTax(): number;
}

const instanceOfTax = (data: any): data is Tax =>
    'getTax' in data;


export {
    Tax, instanceOfTax
}