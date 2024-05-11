import ContextProvider from 'components/layout/ContextProvider';
import BeforeThemeRender from './BeforeThemeRender';
import DocumentScrollProvider from './DocumentScrollProvider';
import localFont from "next/font/local";

const NexonLv1 = localFont({
    src: [
        {
            path: '../../public/N_Lv1_Gothic.woff2',
            weight: '400',
            style: 'normal',
        }
    ]
});

export const metadata = {
    metadataBase: new URL('https://kartrider-tips.netlify.app/'),
    title: {
        template: 'KartRider Tips | %s', 
        default: 'KartRider Tips',
    },
    description: '카트라이더에 대한 정보와 팁들을 제공합니다.',
    author: 'Plush',
    keywords: '카트라이더,kartrider drift,카트라이더 드리프트,카트라이더 팁스, KartRider Tips, 카트라이더 드리프트 가이드',
    themeColor: '#ffffff',
    viewport: 'initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width',
    icons: {
        icon: '/favicon.ico'
    },

    openGraph: {
        title: 'KartRider Tips',
        type: 'website',
        locale: 'ko_KR',
        images: [
            {
                url: `/og-season3.jpg`,
                width: 1200,
                height: 630,
                alt: 'KartRider Tips',
            } 
        ]
    },

    twitter: {
        card: 'summary_large_image',
        title: 'KartRider Tips',
        description: '카트라이더에 대한 정보와 팁들을 제공합니다.',
        images: [`/og-season3.jpg`]
    }, 

    manifest: '/manifest.json'
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                <meta property="og:site_name" content="kartrider tips" />
                <meta property="og:description" content="카트라이더에 대한 정보와 팁들을 제공합니다." />
                <meta property="fb:pages" content="kartrider tips" />
                <meta name="google-site-verification" content="uz3NEg8IDaaBdc49ymqFoq82FXkU-7kcYSxB2jdUpvM" />
                <meta name="naver-site-verification" content="a0a506899f9c9e0213425eef416155dcaa46559f" />
            </head>
            
            <body suppressHydrationWarning className={`${NexonLv1.className}`}>
                <ContextProvider>
                    {children}
                    <DocumentScrollProvider/>
                    <div id="modalRoot"></div>
                </ContextProvider>
                <BeforeThemeRender/>
            </body>
        </html>
    );
}