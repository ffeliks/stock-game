export function getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean(): boolean {
    return Math.random() < 0.5;
}

export function getTodaysDate(): Date {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);

    return date;
}
