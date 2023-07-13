import { useEffect, useState } from "react";

export const useTimeout = (callback, delay) => {
    const [timeoutCleared, setTimeoutCleared] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTimeoutCleared(true);
            callback();
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [callback, delay]);

    return timeoutCleared;
}

export default useTimeout;