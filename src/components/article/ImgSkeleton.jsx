'use client';

import * as Skeletonstyled from 'components/style/common/Skeleton.style';

/*   
    mwd: 스켈레톤 최대 너비값
    pt: 반응형 때문에 이미지 높이값을 padding-top %로 준 값 
    ht: 높이가 고정값일경우
    type: 스켈레톤 모양 타입
*/

const ImgSkeleton = ({ mwd = 0, pt = 0, type = '', ht = 0}) => {
    return ( 
        <Skeletonstyled.Wrap mwd={`${mwd}`} pt={`${pt}%`} ht={`${ht}px`} className={`${type} skeleton`}>
            {type ? null : <Skeletonstyled.Img src="/ico-kart-logo-grayscale.svg" alt="로딩 중"/>}
        </Skeletonstyled.Wrap>
    );
}

export default ImgSkeleton;