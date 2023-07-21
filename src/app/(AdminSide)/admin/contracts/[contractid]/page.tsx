import React from 'react';

const Page = ({params}: { params: { contractid: string } }) => {
    return (
        <div>
            <div>My Post: {params.contractid}</div>
        </div>
    );
};

export default Page;