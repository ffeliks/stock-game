import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
});

function Page({ children }: React.PropsWithChildren<{}>) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>{children}</div>
        </div>
    );
};

export default Page;
