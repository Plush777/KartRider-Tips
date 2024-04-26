"use client";

import { ThemeProvider } from "styled-components";
import media from "components/style/media";

export default function ThemeProviders({ children }){
    return(
        <ThemeProvider theme={{...media}}>
            {children}
        </ThemeProvider>
    )
}