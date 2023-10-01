'use client';

import SCtopArrow from "svg/ico-top-arrow.svg"
import * as Stickystyled from "components/style/common/Sticky.style"
import useSticky from "hooks/useSticky"
import { useTranslation } from 'react-i18next';

const BtnTop = () => {

    const [isShow] = useSticky();
    const { t } = useTranslation();

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
                        <span className="hidden">{t(`topButton.txt`)}</span>
                    </Stickystyled.TopBtn>
                </Stickystyled.BtnArea>
            }
        </>
    );
}

export default BtnTop;