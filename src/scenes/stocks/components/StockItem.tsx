import React from 'react'
import { Stock, PriceStatus } from '../types';
import { createUseStyles } from 'react-jss';

interface StockItemProps {
    stock: Stock;
}

const useStyles = createUseStyles({
    root: {
        border: '1px solid black',
        margin: '.5rem',
        padding: '1rem',
    },
    priceSame: {
        color: 'gray',
    },
    priceIncrease: {
        color: 'green',
    },
    priceDecrease: {
        color: 'red',
    },
});

function StockItem(props: StockItemProps) {
    const classes = useStyles();
    const { stock } = props;

    function getCurrentPrice(): number {
        return stock.currentPrice ? stock.currentPrice : stock.price;
    }

    function getPriceStatus(): PriceStatus {
        const currentPrice = getCurrentPrice();

        if (currentPrice > stock.price) {
            return PriceStatus.INCREASED
        } else if (currentPrice < stock.price) {
            return PriceStatus.DECREASED;
        } else {
            return PriceStatus.SAME;
        }
    }

    function getPercentageDifference(): string {
        return Number((getNumericDifference() / getCurrentPrice()) * 100).toFixed(2) + '%';
    }

    function getNumericDifference(): number {
        return Math.abs(getCurrentPrice() - stock.price);
    }

    function getPriceStatusColor(): string {
        const priceStatus = getPriceStatus();

        if (priceStatus === PriceStatus.INCREASED) {
            return classes.priceIncrease;
        } else if (priceStatus === PriceStatus.DECREASED) {
            return classes.priceDecrease
        } else {
            return classes.priceSame;
        }
    }

    return (
        <div className={classes.root}>
            <div>
                Name: {stock.name}
            </div>
            <div>
                Symbol: {stock.symbol}
            </div>
            <div>
                Initial value: {stock.price}
            </div>
            <div>
                Current price: {getCurrentPrice()}
            </div>
            <div className={getPriceStatusColor()}>
                Percentage diff: {getPercentageDifference()}
            </div>
            <div className={getPriceStatusColor()}>
                Numeric diff: {getNumericDifference()}
            </div>
        </div>
    )
}

export default StockItem;