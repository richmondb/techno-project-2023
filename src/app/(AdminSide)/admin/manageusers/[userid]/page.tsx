import React from 'react';

const Page = ({params}: { params: { userid: string } }) => {
    return (
        <div>
            <div>My Post: {params.userid}</div>
        </div>
    );
};

export default Page;