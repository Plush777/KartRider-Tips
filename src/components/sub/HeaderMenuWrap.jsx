import useBodyScrollLock from 'hooks/useBodyScrollLock';
import { utilRender, utilArray, utilLinks, mobileHeaderMenuTagCondition } from 'data/header';
import { menus } from 'data/gnb';
import SCopen from 'svg/ico-open.svg';
import Pwa from 'components/pwa/Pwa';
import * as H from "style/layout/Header.style";
import { useRef, useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import useClickAlert from "hooks/useClickAlert";


export default function HeaderMenuWrap({ menuToggle, handleSettingButton }) {
    const { lockScroll } = useBodyScrollLock();
    const ulRef = useRef(null);
    const [wrapHeight, setWrapHeight] = useState(0);
    const pathname = usePathname();
    const pathnameArray = pathname.split('/').filter((path) => path);
    const myPathArray = pathnameArray.slice(0, 2);
    const myPath = `/${myPathArray.join('/')}`;
    const clickAlert = useClickAlert('준비중입니다.');

    useEffect(() => {
        if (ulRef.current) {
            const ulElement = ulRef.current;
            const liElements = ulElement.querySelectorAll('li');
            
            let totalLiHeight = 0;

            liElements.forEach(li => {
                totalLiHeight += li.clientHeight;
            });

            const ulStyle = window.getComputedStyle(ulElement);
            const paddingTop = parseFloat(ulStyle.paddingTop);
            const paddingBottom = parseFloat(ulStyle.paddingBottom);

            const totalHeight = totalLiHeight + paddingTop + paddingBottom;

            setWrapHeight(totalHeight);
        }
    }, []); 

    return (
        <H.mobileHeaderMenuWrap className={menuToggle && 'active'} activeHeight={menuToggle && `${wrapHeight}px`}>
            <H.mobileHeaderMenuList ref={ulRef}>
                {menus.map((menu) => {
                    return(
                        <H.mobileHeaderMenuItem className={`disabled ${myPath === menu.path ? 'active' : ''}`} key={menu.id}>
                            <H.mobileHeaderMenuLink onClick={clickAlert} href={menu.path}>
                                {menu.name}
                            </H.mobileHeaderMenuLink>
                        </H.mobileHeaderMenuItem>
                    )
                })}
                {utilArray.map((item,index) => {
                    const linkIndex = index === 0 || index === 1;

                    return(
                        <H.mobileHeaderMenuItem key={index}>
                            <H.mobileHeaderMenuLink 
                                href={utilRender(utilLinks,index)} 
                                as={mobileHeaderMenuTagCondition(linkIndex,item)} 
                                rel={linkIndex ? 'noopener noreferrer' : null} 
                                target={linkIndex ? '_blank' : null} 
                                type={!linkIndex && item !== '앱 설치하기' ? 'button' : null}
                                onClick={index === 2 ?
                                () => {
                                    handleSettingButton();
                                    lockScroll();
                                }

                                : null
                            }>
                                {item === '앱 설치하기' ? <Pwa /> : item}
                                {linkIndex && <SCopen width="20px" height="20px"/>}
                            </H.mobileHeaderMenuLink>
                        </H.mobileHeaderMenuItem>
                    )
                })}
            </H.mobileHeaderMenuList>
        </H.mobileHeaderMenuWrap>
    )
}