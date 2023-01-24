import React from 'react';
import logoWhite from '../svg/ico-kart-logo-white.svg';
import * as VisualCenterstyled from '../style/VisualCenter.style';

const VisualCenter = () => {
    return ( 
        <VisualCenterstyled.VisualCenterWrap>
            <VisualCenterstyled.Vtitle>카트라이더를 기억하고,<br/>기록하는 공간</VisualCenterstyled.Vtitle>
            <VisualCenterstyled.VlogoArea>
                <img src={logoWhite} alt="카트라이더 아카이브 로고" />
            </VisualCenterstyled.VlogoArea>
            <VisualCenterstyled.VDescArea>
                <VisualCenterstyled.VDescBold>No limits, all drift!</VisualCenterstyled.VDescBold>
                <VisualCenterstyled.VDescRegular>끝이 아닌 새로운 시작 카트라이더: 드리프트</VisualCenterstyled.VDescRegular>
            </VisualCenterstyled.VDescArea>
        </VisualCenterstyled.VisualCenterWrap>
     );
}

export default VisualCenter;