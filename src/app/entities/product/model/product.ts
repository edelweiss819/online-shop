export interface IPrice {
    price: number;
    discount?: {
        size: number;
        endTime: number;
    };
}


export interface IImages {
    small?: string;
    large?: string;
}

export interface IProductRating {
    rating: number;
    totalFeedbackCount: number;
}


export interface IProduct {
    id: string;
    name: string;
    category: string;
    tags: string[];
    priceInfo: IPrice;
    images: IImages;
    rating: IProductRating;
}
