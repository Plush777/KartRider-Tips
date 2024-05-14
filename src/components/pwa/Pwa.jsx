import styled from 'styled-components';
import { useState, useEffect } from "react";
import SCappDownload from 'svg/ico-app-download.svg';

const PWAButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    max-width: 95px;
    height: 34px;
    border-radius: 6px;
    font-size: .875rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--active);

    &.transparent {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        padding: 0;
        width: 22px;
        height: 22px;
        background-color: transparent;
    }
`

//https://kagrin97-blog.vercel.app/react/pwa-beforeInstallPrompt
export default function Pwa ({ type }) {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, []);

    const handleBeforeInstallPrompt = (event) => {
        event.preventDefault();
        setDeferredPrompt(event);
    };

    const installApp = () => {
        if (!deferredPrompt) {
            alert('이미 앱을 설치했거나 지원하지 않는 브라우저입니다.');
            return;
        }

        if (deferredPrompt) {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("사용자가 설치 프롬프트에 동의했습니다.");
                } else {
                    console.log("사용자가 설치 프롬프트를 무시했습니다.");
                }

                setDeferredPrompt(null);
            });
        }
    };

    const renderButton = (type) => {
        if (type === 'button') {
            return <PWAButton type="button" onClick={installApp}>앱 설치하기</PWAButton>
        } 
        
        if (type === 'icon') {
            return (
                <PWAButton className='transparent' type="button" onClick={installApp}>
                    <SCappDownload width="22px" height="22px" fill="transparent"/>
                    <span className='hidden'>앱 설치하기</span>
                </PWAButton>
            );
        }
    }

    return (
        <>
           {renderButton(type)}
        </>
    )
}