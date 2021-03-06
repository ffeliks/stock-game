import {Stock} from './types';

export function getStocks(): Promise<Stock[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          symbol: 'AAPL',
          name: 'Apple',
          price: 1000,
        },
        {
          symbol: 'MSFT',
          name: 'Microsoft',
          price: 250,
        },
        {
          symbol: 'WFC',
          name: 'Wells Fargo & Company Common Stock',
          price: 28,
        },
        {
          symbol: 'UBER',
          name: 'Uber',
          price: 41,
        },
        {
          symbol: 'LYFT',
          name: 'Lyft',
          price: 57,
        },
      ]);
    }, 1000);
  });
}
