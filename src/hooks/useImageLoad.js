import { useState } from "react";

export default function useImageLoad() {
    const [loaded, setLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const loadingComplete = () => {
        setLoaded(true);
    }

    return {
        loaded,
        imageError,
        handleImageError,
        loadingComplete
    }
}