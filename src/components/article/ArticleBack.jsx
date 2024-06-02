import * as A from "style/components/sub/ArticleTop.style";
import Link from "next/link";
import SCback from "svg/ico-back.svg";
import SChome from "svg/ico-home.svg";
import React from "react";

export default function ArticleBack({ link = '/', type }) {
    function renderSvg(type) {
        if (type === 'back') return (
            <React.Fragment>
                <SCback width="20" height="20"/>
                <span className="hidden">뒤로가기</span>
            </React.Fragment>
        )

        if (type === 'home') return (
            <React.Fragment>
                <SChome width="20" height="20"/>
                <span className="hidden">메인으로 가기</span>
            </React.Fragment>
        )
    }

    return(
        <A.ButtonDiv className={type}>
            <Link href={link}>
                {renderSvg(type)}
            </Link>
        </A.ButtonDiv>
    )
}