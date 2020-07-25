export interface Stock {
    symbol: string;
    name: string;
    price: number;
    previousPrice?: number;
    currentPrice?: number;
}

export enum PriceStatus {
    SAME,
    INCREASED,
    DECREASED,
}
