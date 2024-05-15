import ReactQueryProvider from 'providers/ReactQueryProvider';
import ThemeProvider from 'providers/ThemeProvider';
import HydrationProvider from 'providers/HydrationProvider';
import GlobalProvider from 'providers/GlobalProvider';
import AnalyticsProvider from 'providers/AnalyticsProvider';

export default function ContextProvider({ children }) {
    return(
        <ReactQueryProvider>
            <HydrationProvider>
                <ThemeProvider>
                    <AnalyticsProvider/>
                    <GlobalProvider/>
                    {children}
                </ThemeProvider>
            </HydrationProvider>
        </ReactQueryProvider>
    )
};