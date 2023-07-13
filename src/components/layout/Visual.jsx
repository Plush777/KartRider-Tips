'use client';

import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade , Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as VisualCenterstyled from 'components/style/components/main/VisualCenter.style';
import * as Visualstyled from "components/style/components/main/Visual.style";
import * as Buttonstyled from "components/style/common/Button.style";
import SCarrowSlideNext from 'svg/ico-arrow-slide-next.svg';
import SCarrowSlidePrev from 'svg/ico-arrow-slide-prev.svg';
import { useState , useEffect } from 'react';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';

const Visual = () => {

    const [swiper, setSwiper] = useState(null);
    const { t } = useTranslation();
   
    useEffect(() => {
        if (swiper) {
            setSwiper(swiper.realIndex);
        }
    },[swiper]);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
    
    const params = {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
        },
        autoplay: { delay: 5200 },
        effect: "fade",
        allowTouchMove: isMobile,
        pagination: {
            clickable: true,
        },
    }
    
    return ( 
        <Visualstyled.VisualWrap>
            <Visualstyled.StyledSwiper onSwiper={setSwiper} {...params}>

                    <button type="button" className="swiper-button image-swiper-button-next">
                        <SCarrowSlidePrev width="50px" height="50px" fill="#fff"/>
                    </button>
                    <button type="button" className="swiper-button image-swiper-button-prev">
                        <SCarrowSlideNext width="50px" height="50px" fill="#fff"/>
                    </button>

                    <SwiperSlide>
                        <Visualstyled.VisualInner>
                            <Visualstyled.ImgStyle src="images/bg/bg-visual-01.webp" alt="메인 비주얼 이미지"/>
                            <VisualCenterstyled.VisualCenterWrap>
                                <VisualCenterstyled.VtxtArea>
                                    <VisualCenterstyled.Vtitle>{parse(t(`slide.group1.title`))}</VisualCenterstyled.Vtitle>
                                    <VisualCenterstyled.Vdesc>{parse(t(`slide.group1.desc`))}</VisualCenterstyled.Vdesc>
                                </VisualCenterstyled.VtxtArea> 
                            </VisualCenterstyled.VisualCenterWrap>
                        </Visualstyled.VisualInner>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Visualstyled.VisualInner>
                            <Visualstyled.ImgStyle src="images/bg/bg-visual-02.webp" alt="메인 비주얼 이미지"/>
                            <VisualCenterstyled.VisualCenterWrap>
                                <VisualCenterstyled.VtxtArea>
                                    <VisualCenterstyled.Vtitle>{parse(t(`slide.group2.title`))}</VisualCenterstyled.Vtitle>
                                    <VisualCenterstyled.Vdesc>{parse(t(`slide.group2.desc`))}</VisualCenterstyled.Vdesc>
                                    <Buttonstyled.Btn height="55px" radius="8px" padding="0 16px" color="#fff" 
                                    fontSize="1.25rem" border="1px solid #fff" background="transparent" as="a" className="white"
                                    href="https://map64wlb3a2.typeform.com/to/vGp6k1Nc" target="_blank" rel='noopener noreferrer'>{parse(t(`slide.group2.participate`))}</Buttonstyled.Btn>
                                </VisualCenterstyled.VtxtArea> 
                            </VisualCenterstyled.VisualCenterWrap>
                        </Visualstyled.VisualInner>
                    </SwiperSlide>
                
            </Visualstyled.StyledSwiper>
        </Visualstyled.VisualWrap>
     );
}

export default Visual;