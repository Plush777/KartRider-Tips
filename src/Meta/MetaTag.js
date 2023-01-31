import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ title }) => {
    return (
        <Helmet 
            title={title} 
        />
    );
};

export default Meta;