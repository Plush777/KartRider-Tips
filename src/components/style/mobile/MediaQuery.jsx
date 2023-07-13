import React from "react";
import { useMediaQuery } from "react-responsive";

const M1024 = ({ children }) => {
    const is1024 = useMediaQuery({ 
        query: "(max-width: 1024px)" 
    });
    return <React.Fragment>{is1024 && children}</React.Fragment>
}

const M768 = ({ children }) => {
    const is768 = useMediaQuery({ 
        query: "(max-width: 768px)" 
    });
    return <React.Fragment>{is768 && children}</React.Fragment>
}

const Min768 = ({ children }) => {
    const is768 = useMediaQuery({ 
        query: "(min-width: 768px)" 
    });
    return <React.Fragment>{is768 && children}</React.Fragment>
}

const M500 = ({ children }) => {
    const is500 = useMediaQuery({ 
        query: "(max-width: 500px)" 
    });
    return <React.Fragment>{is500 && children}</React.Fragment>
}

const M375 = ({ children }) => {
    const is375 = useMediaQuery({ 
        query: "(max-width: 375px)" 
    });
    return <React.Fragment>{is375 && children}</React.Fragment>
}

export {M1024, M768, Min768, M500, M375}