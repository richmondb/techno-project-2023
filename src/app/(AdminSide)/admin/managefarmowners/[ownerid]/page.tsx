import React from 'react';

const Page = ({params}: { params: { ownerid: string } }) => {
    return (
        <div>
            <div>My Post: {params.ownerid}</div>
        </div>
    );
};

export default Page;