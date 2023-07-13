"use client";

import { ThemeProvider } from "styled-components";
import theme from "components/style/theme";
import media from "components/style/media";

export default function ThemeProviders({ children }){
    return(
        <ThemeProvider theme={{...theme,...media}}>
            {children}
        </ThemeProvider>
    )
}