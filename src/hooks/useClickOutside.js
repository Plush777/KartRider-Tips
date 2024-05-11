import { useEffect, useRef } from "react";

/* https://dev.to/rashed_iqbal/how-to-handle-outside-clicks-in-react-with-typescript-4lmc */
const useClickOutside = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            } 
        }   
        
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [callback]);

    return ref;
}

export default useClickOutside;