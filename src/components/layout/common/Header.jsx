'use client';

import * as H from "style/layout/Header.style";
import { useRef } from 'react';
import useStickyHeader from 'hooks/useStickyHeader';
import HeaderInner from "components/layout/common/HeaderInner";

export default function Header () {
    const ref = useRef();
    const { visible } = useStickyHeader();

    return(
        <H.Header className={visible ? 'active' : null} ref={ref}>
            <HeaderInner />
        </H.Header>
    )
}