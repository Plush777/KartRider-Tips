'use client';

import * as Substyled from 'components/style/common/Area.style';
import BtnTop from 'components/article/BtnTop';
import React from 'react'; 
import { useTranslation } from 'react-i18next';
import { Min768 } from 'components/style/mobile/MediaQuery';
import { useSelector } from 'react-redux';
import BtnClipBoard from 'components/article/BtnClipBoard';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import FlipBook from 'components/article/FlipBook';

const GlossaryContents = () => {
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const { t } = useTranslation();

    return(
        <>
            <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>

            <Substyled.Wrap>
                <Substyled.Inner>
                    <div className="container">
                        <FlipBook/>
                    </div>

                    <BtnClipBoard/>
                    <BtnTop/>
                </Substyled.Inner>
            </Substyled.Wrap>
        </>
    )
}

export default GlossaryContents;