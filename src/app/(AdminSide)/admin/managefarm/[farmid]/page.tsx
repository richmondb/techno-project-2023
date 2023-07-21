import React from 'react';

const Page = ({params}: { params: { farmid: string } }) => {
    return (
        <div>
            <div>My Post: {params.farmid}</div>
        </div>
    );
};

export default Page;