'use client';

import * as T from "style/components/sub/TopNavigation.style"
import * as S from "style/components/sub/Sidebar.style";
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { changeLink } from "data/topNavigation";
import { useEffect, useState } from "react";
import SCsidebarLeft from "svg/ico-sidebar-left.svg";
import Sidebar from "components/sub/Sidebar";
import SCclose from 'svg/ico-close.svg';
import { detailsData } from "data/sidebar/detailsData";
import { listData } from "data/sidebar/listData";
import { groupData } from "data/sidebar/groupData";
import useClickOutside from "hooks/useClickOutside";

export default function TopNavigation() {
    const pathname = usePathname();
    const pathnameArray = pathname.split('/').filter((path) => path);
    /* 0번째 경로를 제외한 나머지 경로 */
    const myPathArray = pathnameArray.slice(1);
    const lastPathname = pathnameArray[pathnameArray.length - 1];

    const [currentPath, setCurrentPath] = useState(null);
    const [sideToggle, setSideToggle] = useState(false);
    const sidebarRef = useClickOutside(() => setSideToggle(false));

    useEffect(() => {
        setCurrentPath(changeLink([lastPathname], lastPathname));
    }, []);

    // console.log(Object.values(detailsData.learn[0]))

    const handleSideOpen = (state) => {
        setSideToggle(state);
    }

    return(
        <>
            <Sidebar
                wrapClassName={sideToggle ? 'active' : ''}
                dimmedClassName={sideToggle ? 'active' : ''}
                groupData={groupData.learn}
                detailsData={detailsData.learn}
                listData={listData.learn}
                sidebarRef={sidebarRef}
                sideToggle={sideToggle}
            >
                <S.BtnArea>
                    <S.CloseButton title="목차 닫기" onClick={() => handleSideOpen(false)}>
                        <SCclose width="22px" height="22px"/>
                    </S.CloseButton>
                </S.BtnArea>
            </Sidebar>
            
            <T.Wrap>
                <T.Inner>
                    <T.SidebarOpenButton onClick={() => handleSideOpen(true)} type="button" title="목차 열기">
                        <SCsidebarLeft width="24px" height="24px"/>
                    </T.SidebarOpenButton>

                    <T.List>
                        {myPathArray.map((link, index) => {
                            return(
                                <T.Item key={index}>
                                    <Link href={`/docs/${link}`}>{currentPath}</Link>
                                </T.Item>
                            )
                        })}
                    </T.List>
                </T.Inner>
            </T.Wrap>
        </>
        
    )
}