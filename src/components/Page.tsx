import React from 'react';

const Page = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <div>
            Page cmp
            <div>{children}</div>
        </div>
    );
};

export default Page;
