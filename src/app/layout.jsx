import ContextProvider from 'providers/ContextProvider';
import BeforeThemeRender from 'providers/BeforeThemeRender';
import DocumentScrollProvider from 'providers/DocumentScrollProvider';
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
        template: '%s | KartRider Tips', 
    },
    description: '카트라이더에 대한 정보와 팁들을 제공합니다.',
    author: 'Plush',
    keywords: '카트라이더,kartrider drift,카트라이더 드리프트,카트라이더 팁스, KartRider Tips, 카트라이더 드리프트 가이드',
    themeColor: [{
        media: '(prefers-color-scheme: dark)'
    }],
    viewport: 'width=device-width, initial-scale=1.0',
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
                <meta name="naver-site-verification" content="3f94de41171f46560d8a1005d54f29344fc28153" />
                <meta name="google-site-verification" content="GPYk6PpfcgAfH_xVermIhvSiltn-RMAzOC9Oap7TAWY" />
                <meta name="theme-color" content="#f2f2f2" />
                <link rel="preload" href="/images/tier/img-tier.png" as="image" />
            </head>
            
            <body suppressHydrationWarning className={`${NexonLv1.className}`}>
                <ContextProvider>
                    {children}
                    <DocumentScrollProvider/>
                    <div id="modalRoot" style={{ 'pointerEvents': 'none' }}></div>
                </ContextProvider>
                <BeforeThemeRender/>
            </body>
        </html>
    );
}