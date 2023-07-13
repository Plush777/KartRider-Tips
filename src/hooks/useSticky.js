import { useState, useEffect } from "react";

export const useSticky = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        window.addEventListener("scroll", handleShowButton);

        return () => {
            window.removeEventListener("scroll", handleShowButton);
        };
    }, []);

    return [isShow, setIsShow];
}

export default useSticky