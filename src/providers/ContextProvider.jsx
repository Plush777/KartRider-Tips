import ReactQueryProvider from 'providers/ReactQueryProvider';
import ThemeProvider from 'providers/ThemeProvider';
import HydrationProvider from 'providers/HydrationProvider';
import GlobalProvider from 'providers/GlobalProvider';
import AnalyticsProvider from 'providers/AnalyticsProvider';
import Recoil from 'components/config/Recoil';

export default function ContextProvider({ children }) {
    return(
        <ReactQueryProvider> 
            <Recoil>
                <HydrationProvider>
                    <ThemeProvider>
                        <AnalyticsProvider/>
                        <GlobalProvider/>
                        {children}
                    </ThemeProvider>
                </HydrationProvider>
            </Recoil>
        </ReactQueryProvider>
    )
};