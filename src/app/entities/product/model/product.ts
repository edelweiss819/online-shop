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

export interface IProductCategory {
    name: string;
    id: string;
}

export interface IProduct {
    id: string;
    name: string;
    category: IProductCategory;
    quantity: number;
    tags: string[];
    isNew: boolean;
    priceInfo: IPrice;
    images: IImages;
    rating: IProductRating;
}
