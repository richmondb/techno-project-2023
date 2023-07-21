import React from 'react';

const Page = ({params}: { params: { accountid: string } }) => {
    return (
        <div>
            <div>My Post: {params.accountid}</div>
        </div>
    );
};

export default Page;