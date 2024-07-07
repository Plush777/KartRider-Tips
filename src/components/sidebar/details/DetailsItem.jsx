import * as S from "style/components/sub/common/Sidebar.style";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useClickAlert from "hooks/useClickAlert";
import Grid from "components/encyclopedia/Grid";

export default function DetailsItem ({ 
    type, 
    depth1, 
    depth1Key, 
    value, 
    setValue, 
    dataProps, 
    clicked,
    setClicked,
    kartGradeData,
    tabIndex
 }) {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState('');
    const [detailOpen, setDetailOpen] = useState(false);

    const myHref = depth1 && depth1.depth2?.map((depth2) => depth2.href);

    if (type !== 'list') {
        useLayoutEffect(() => {
            myHref?.forEach((href) => pathname === href && setIsActive('active'));
        }, [pathname]);
    
        useEffect(() => {
            if (isActive === 'active' || value.length > 0) {
                setDetailOpen(true);
            } else {
                setDetailOpen(false);
            }
        }, [isActive, value]);
    }

    const clickAlert = (message) => {
        return useClickAlert(message);
    }

    const renderItem = (type, depth1, depth1Key) => {
        if (type === 'noDepth') {
            const hrefActive = depth1.href === pathname ? 'active' : '';
            const isHighlighted = value.length > 0 ? 'highlight' : ''

            return (
                <S.DetailsOuterItem className={`${hrefActive}`} noDepth key={depth1Key}>
                    <Link className={`detailsLink highlightText ${isHighlighted}`} href={depth1.href}>{depth1.title}</Link>
                </S.DetailsOuterItem>
            )
        }

        if (type === 'hasDepth') {
            return (
                <S.DetailsOuterItem key={depth1Key}>
                    <S.Details open={detailOpen}>
                        <S.Summary>
                            <span className={`highlightText ${value.length > 0 ? 'highlight' : ''}`}>{depth1.title}</span>
                        </S.Summary>
                        <S.List>
                            {depth1.depth2.map((depth2, depth2Index) => {
                                const hrefActive = depth2.href === pathname ? 'active' : '';
                                const isHighlighted = value.length > 0 && depth2.title.toLowerCase().includes(value.toLowerCase());

                                return (
                                    <S.Item 
                                        className={`${hrefActive} ${depth2.disabled ? 'disabled' : ''}`} 
                                        key={depth2Index}
                                    >
                                        <Link className={`highlightText ${isHighlighted ? 'highlight' : ''}`} onClick={depth2.disabled && clickAlert('아직 스킬이 없는 캐릭터예요.')} href={depth2.href}>{depth2.title}</Link>
                                    </S.Item>
                                )
                            })}
                        </S.List>
                    </S.Details>
                </S.DetailsOuterItem>
            )
        }

        /* 도감 페이지 검색  */
        if (type === 'list') {
            return (
                <Grid 
                    data={dataProps.loopData}
                    value={value} 
                    setValue={setValue}
                    kartGradeData={kartGradeData} 
                    tabIndex={tabIndex} 
                    clicked={clicked}
                    setClicked={setClicked}
                />
            )
        }
    }

    return(
        <>
            {renderItem(type, depth1, depth1Key)}
        </>
    )
}