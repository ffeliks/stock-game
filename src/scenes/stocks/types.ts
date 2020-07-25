export interface Stock {
    symbol: string;
    name: string;
    price: number;
    previousPrice?: number;
    currentPrice?: number;
}
