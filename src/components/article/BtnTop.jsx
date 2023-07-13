'use client';

import SCtopArrow from "svg/ico-top-arrow.svg"
import * as Stickystyled from "components/style/common/Sticky.style"
import useSticky from "hooks/useSticky"

const BtnTop = () => {

    const [isShow] = useSticky();

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return( 
        <>
            {isShow &&
                <Stickystyled.BtnArea className="type01">
                    <Stickystyled.TopBtn onClick={scrollToTop}>
                        <SCtopArrow width="20px" height="20px" fill="#000"/>
                        <span className="hidden">위로 올라가기</span>
                    </Stickystyled.TopBtn>
                </Stickystyled.BtnArea>
            }
        </>
    );
}

export default BtnTop;