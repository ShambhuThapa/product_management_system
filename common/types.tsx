export  type User={
    id:number;
    email:string;
    full_name:string;
    password:string;
}

export type product = {
    id?:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          any;
    images?:             string[];
}