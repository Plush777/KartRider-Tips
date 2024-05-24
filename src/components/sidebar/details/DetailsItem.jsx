import * as S from "style/components/sub/Sidebar.style";
import Link from "next/link";
import React from "react";

export default function DetailsItem ({ type, depth1, depth1Key }) {
    const renderItem = (type, depth1, depth1Key) => {
        if (type === 'noDepth') {
            return (
                <S.DetailsOuterItem noDepth key={depth1Key}>
                    <Link className="detailsLink" href={depth1.href}>{depth1.title}</Link>
                </S.DetailsOuterItem>
            )
        }

        if (type === 'hasDepth') {
            return(
                <S.DetailsOuterItem key={depth1Key}>
                    <S.Details>
                        <S.Summary>{depth1.title}</S.Summary>
                        <S.List>
                            {depth1.depth2.map((depth2, depth2Index) => {
                                return (
                                    <S.Item key={depth2Index}>
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