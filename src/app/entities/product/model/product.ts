export interface IProduct {
    id: string;
    name: string;
    price: number
    imageSrc: string;
    imageBigProductSrc: string;
    discount?: number
}