import React from 'react'
import { Stock } from '../types';
import { createUseStyles } from 'react-jss';

interface StockItemProps {
    stock: Stock;
}

const useStyles = createUseStyles({
    root: {
        border: '1px solid black',
        margin: '.5rem',
        padding: '1rem',
    }
});

function StockItem(props: StockItemProps) {
    const classes = useStyles();
    const { stock } = props;

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
                Current price: {stock.currentPrice ? stock.currentPrice : stock.price}
            </div>
        </div>
    )
}

export default StockItem;