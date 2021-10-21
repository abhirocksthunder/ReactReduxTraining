export interface Rating {
    rate: number;
    count: number;
}

export interface Products {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}