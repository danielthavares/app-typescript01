interface Discount {
    getDiscount(): number;
}

const instanceOfDiscount = (data: any): data is Discount =>
    'getDiscount' in data;


export {
    Discount, instanceOfDiscount
}