import React from 'react';
import * as VisualCenterstyled from 'components/style/components/main/VisualCenter.style';

const VisualCenter = () => {
    return ( 
        <VisualCenterstyled.VisualCenterWrap>
            <VisualCenterstyled.Vtitle>카트라이더 초심자를 위한<br/>여러가지 정보들을 제공합니다</VisualCenterstyled.Vtitle>
            <VisualCenterstyled.VDescArea>
                <VisualCenterstyled.VDescBold>No limits, all drift!</VisualCenterstyled.VDescBold>
                <VisualCenterstyled.VDescRegular>끝이 아닌 새로운 시작 카트라이더: 드리프트</VisualCenterstyled.VDescRegular>
            </VisualCenterstyled.VDescArea>
        </VisualCenterstyled.VisualCenterWrap>
     );
}

export default VisualCenter;