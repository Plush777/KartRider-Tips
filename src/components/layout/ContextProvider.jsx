import Providers from 'redux/Provider';
import ReactQueryProviders from 'utils/ReactQuery/provider';
import ThemeProviders from 'app/ThemeProviders';
import HydrationProvider from 'app/HydrationProvider';
import GlobalProvider from 'app/GlobalProvider';
import AnalyticsProvider from 'app/AnalyticsProvider';

const ContextProvider = ({ children }) => {
    return(
        <Providers>
            <ReactQueryProviders>
                <HydrationProvider>
                    <ThemeProviders>
                        <AnalyticsProvider/>
                        <GlobalProvider/>
                        {children}
                    </ThemeProviders>
                </HydrationProvider>
            </ReactQueryProviders>
        </Providers>
    )
};

export default ContextProvider;