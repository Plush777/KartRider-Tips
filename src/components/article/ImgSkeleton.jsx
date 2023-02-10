import * as Skeletonstyled from '../../components/style/common/skeleton.style'
import skeletonLogo from '../../components/svg/ico-kart-logo-grayscale.svg';

const ImgSkeleton = () => {
    return ( 
        <Skeletonstyled.Wrap loading="true">
            <Skeletonstyled.Img src={skeletonLogo} alt="로딩 중"/>
        </Skeletonstyled.Wrap>
    );
}

export default ImgSkeleton;