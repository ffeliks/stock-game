import React, { useState, useEffect } from 'react'
import { getStocks } from './service';
import { Stock } from './types';
import StockItem from './components/StockItem';
import { getRandomNumberBetween, getRandomBoolean, getTodaysDate } from '../../utils';

function Stocks() {
  const [date, setDate] = useState<Date>(getTodaysDate());
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    getStocks().then((data) => setStocks(data))
  }, []);

  function getFormattedDate(): string {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-us', options);
  }

  function getDayNumber(): number {
    const timeDiff = Math.abs(date.getTime() - getTodaysDate().getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
  }

  function advanceDate(): void {
    var newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + 1)

    setDate(newDate);
  }

  function handleNextDayClick(): void {
    advanceDate();
    updateStockPrices();
  }

  function getNewRandomizedPrice(currentPrice: number): number {
    const percentage = getRandomNumberBetween(1, 10);
    const isIncrease = getRandomBoolean();

    const modifier = Math.round((percentage / 100) * currentPrice);

    return isIncrease
      ? currentPrice + modifier
      : currentPrice - modifier;
  }

  function updateStockPrices(): void {
    const newStocks: Stock[] = [];

    stocks.forEach((stock: Stock) => {
      const previousPrice = stock.currentPrice ? stock.currentPrice : stock.price;
      const currentPrice = getNewRandomizedPrice(previousPrice);

      newStocks.push({
        name: stock.name,
        price: stock.price,
        symbol: stock.symbol,
        previousPrice,
        currentPrice,
      });
    });

    setStocks(newStocks);
  }

  return (
    <>
      {stocks.map((stock: Stock) => <StockItem key={stock.symbol} stock={stock} />)}
      <hr />
      {`Day ${getDayNumber()}`}  | {getFormattedDate()}
      <button onClick={handleNextDayClick}>Next day</button>
    </>
  )
}

export default Stocks
