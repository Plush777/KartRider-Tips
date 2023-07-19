import Providers from 'redux/Provider'
import ThemeProviders from './ThemeProviders';
import I18nProvider from './I18nProvider';
import HydrationProvider from './HydrationProvider';
import GlobalProvider from './GlobalProvider';
import PreloadResources from './PreloadResources';
import AnalyticsProvider from './AnalyticsProvider';
import RouterScrollProvider from './RouterScrollProvider';
import 'scss/app.scss';
import BeforeThemeRender from './BeforeThemeRender';

export const metadata = {
    title: {
        template: 'KartRider Tips | %s',
        default: 'KartRider Tips',
    },
    description: '카트라이더 초심자를 위한 여러가지 정보들을 제공합니다.',
    author: 'Plush',
    keywords: '카트라이더,kartrider,drift,카트,카트라이더 팁스, KartRider Tips, 카트라이더 초심자',
    themeColor: '#ffffff',
    viewport: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width',
    icons: {
        icon: '/favicon.ico',
            apple: [
                '/apple-icon-57x57.png',
                '/apple-icon-60x60.png',
                '/apple-icon-76x76.png',
                '/apple-icon-114x114.png',
                '/apple-icon-120x120.png',
                '/apple-icon-144x144.png',
                '/apple-icon-152x152.png',
                '/apple-icon-180x180.png',
            ],  

            favicon: [
                '/favicon-96x96.png',
                '/favicon-32x32.png',
                '/favicon-16x16.png',
            ],

            manifest: '/manifest.json',
    },

    openGraph: {
        title: 'KartRider Tips',
        type: 'website',
        locale: 'ko_KR',
        images: [
            {
                url: '/og-season3.jpg',
                width: 1200,
                height: 630,
                alt: 'KartRider Tips',
            }
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'KartRider Tips',
        description: '카트라이더 초심자를 위한 여러가지 정보들을 제공합니다.',
        images: ['/og-season3.jpg']
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <PreloadResources/>
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-144x144.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-96x96.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-72x72.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-48x48.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-36x36.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/ms-icon-70x70.png"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                <meta name="msapplication-TileImage" content="/ms-icon-150x150.png"/>
                <meta name="msapplication-TileImage" content="/ms-icon-310x310.png"/>
                <meta property="og:site_name" content="카트라이더 팁스" />
                <meta property="og:description" content="카트라이더 초심자를 위한 여러가지 정보들을 제공합니다." />
                <meta property="fb:pages" content="카트라이더 팁스" />
                <meta name="google-site-verification" content="uz3NEg8IDaaBdc49ymqFoq82FXkU-7kcYSxB2jdUpvM" />
                <meta name="naver-site-verification" content="a0a506899f9c9e0213425eef416155dcaa46559f" />
            </head>
            
            <body suppressHydrationWarning>
                <BeforeThemeRender/>
                <Providers>
                    <HydrationProvider>
                        <ThemeProviders>
                            <RouterScrollProvider/>
                            <AnalyticsProvider/>
                            <GlobalProvider/>
                            <I18nProvider>
                                {children}
                            </I18nProvider>
                            <div id="modalRoot"></div>
                        </ThemeProviders>
                    </HydrationProvider>
                </Providers>
            </body>
        </html>
    );
}