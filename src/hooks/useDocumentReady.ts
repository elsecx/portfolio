import React from "react";

export const useDocumentReady = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const handleLoad = () => setIsLoaded(true);

        if (document.readyState === "complete") {
            setIsLoaded(true);
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return isLoaded;
};
