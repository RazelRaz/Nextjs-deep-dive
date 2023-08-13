import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <h1>Product Layout</h1>
            <p>Directory Specific Layout</p>
            {children}
        </div>
    );
};

export default layout;