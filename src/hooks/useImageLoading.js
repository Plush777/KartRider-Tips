import { useState } from "react";

export const useImageLoading = () => {

    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    }

    return [loading, handleLoad];
}

export default useImageLoading;