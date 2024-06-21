import * as S from "style/components/sub/Sidebar.style";
import Link from "next/link";
import React, { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DetailsItem ({ type, depth1, depth1Key, value }) {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState('');
    const [detailOpen, setDetailOpen] = useState(false);

    const myHref = depth1.depth2?.map((depth2) => depth2.href);

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

    const renderItem = (type, depth1, depth1Key) => {
        if (type === 'noDepth') {
            const hrefActive = depth1.href === pathname ? 'active' : '';
            const isHighlighted = value.length > 0 ? 'highlight' : ''

            return (
                <S.DetailsOuterItem className={`${hrefActive} ${isHighlighted}`} noDepth key={depth1Key}>
                    <Link className="detailsLink" href={depth1.href}>{depth1.title}</Link>
                </S.DetailsOuterItem>
            )
        }

        if (type === 'hasDepth') {
            return (
                <S.DetailsOuterItem key={depth1Key}>
                    <S.Details open={detailOpen}>
                        <S.Summary>{depth1.title}</S.Summary>
                        <S.List>
                            {depth1.depth2.map((depth2, depth2Index) => {
                                const hrefActive = depth2.href === pathname ? 'active' : '';
                                const isHighlighted = value.length > 0 && depth2.title.toLowerCase().includes(value.toLowerCase());

                                return (
                                    <S.Item 
                                        className={`${hrefActive} ${isHighlighted ? 'highlight' : ''}`} 
                                        key={depth2Index}
                                    >
                                        <Link href={depth2.href}>{depth2.title}</Link>
                                    </S.Item>
                                )
                            })}
                        </S.List>
                    </S.Details>
                </S.DetailsOuterItem>
            )
        }
    }

    return(
        <>
            {renderItem(type, depth1, depth1Key)}
        </>
    )
}