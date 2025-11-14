import React, { useState, useEffect } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Search: React.FC = () => {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // слушатель
        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    return isMobile ? <Mobile /> : <Desktop />;
};

export default Search;
