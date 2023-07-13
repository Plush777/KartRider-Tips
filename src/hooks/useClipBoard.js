const useClipBoard = () => {

    const onCopy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    }

    return [onCopy];
}

export default useClipBoard;