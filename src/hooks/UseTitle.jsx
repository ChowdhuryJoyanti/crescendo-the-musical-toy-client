import React, { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Rhythmic Melody Studio `;
    },[title])
    
};

export default UseTitle;