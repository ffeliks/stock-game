import React from 'react'
import { Stock, PriceStatus } from '../types';
import { createUseStyles } from 'react-jss';

interface StockItemProps {
    stock: Stock;
}

const useStyles = createUseStyles({
    root: {
        margin: '.5rem',
        width: '28rem',
        height: '3.5rem',
        padding: '1.5rem',
    },
    symbolContainer: {
        color: '#303960',
        padding: '.3rem',
        backgroundColor: '#f8b24f',
        borderRadius: '.5rem .5rem 0 0',
        width: '8rem',
        textAlign: 'center',
    },
    stockContent: {
        padding: '.5rem',
        borderRadius: '0 .5rem .5rem .5rem',
        backgroundColor: '#303960',
        color: '#e5e5e5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    priceDiffContainer: {
        width: '7rem',
        textAlign: 'center',
        padding: '.2rem 1rem',
        borderRadius: '.5rem',
    },
    priceSame: {
        color: '#303960',
        backgroundColor: '#e5e5e5',
    },
    priceIncrease: {
        color: '#303960',
        backgroundColor: '#A5FF8A',
    },
    priceDecrease: {
        color: 'white',
        backgroundColor: '#e37a71',
    },
});

function StockItem(props: StockItemProps) {
    const classes = useStyles();
    const { stock } = props;

    function getCurrentPrice(): number {
        return stock.currentPrice ? stock.currentPrice : stock.price;
    }

    function getPercentageDifference(): string {
        return Number((getNumericDifference() / getCurrentPrice()) * 100).toFixed(2) + '%';
    }

    function getNumericDifference(): number {
        return Math.abs(getCurrentPrice() - stock.price);
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
            <div className={`${classes.symbolContainer}`}>
                {stock.symbol} - {`${getCurrentPrice()}$`}
            </div>
            <div className={classes.stockContent}>
                <div>
                    <div>
                        {stock.name}
                    </div>
                    <div>
                        Initial value: {`${stock.price}$`}
                    </div>
                </div>
                <div className={`${classes.priceDiffContainer} ${getPriceStatusColor()}`}>
                    {getPercentageDifference()}, {`${getNumericDifference()}$`}
                </div>
            </div>
        </div>
    )
}

export default StockItem;