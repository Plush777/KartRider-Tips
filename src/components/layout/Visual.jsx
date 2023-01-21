import styled from "styled-components";
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import VisualCenter from "../article/VisualCenter";

const VisualWrap = styled.div`
    width: 100%;
    height: 600px;
`
const StyledSwiper = styled(Swiper)`
    position: relative;
    height: 100%;
`
const ImgStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const slideImg = [
    {src: "../images/bg/bg-visual-01.png"},
    {src: "../images/bg/bg-visual-02.jpg"},
    {src: "../images/bg/bg-visual-03.jpg"},
    {src: "../images/bg/bg-visual-04.jpg"}
];

const Visual = () => {
    SwiperCore.use([Autoplay, EffectFade]);
    
    return ( 
        <VisualWrap>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{delay: 3000}}
                effect={"fade"}>

                {slideImg.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ImgStyle src={item.src} alt="메인 비주얼 이미지"/>
                            <VisualCenter/>
                        </SwiperSlide>
                    )
                })}
            </StyledSwiper>
        </VisualWrap>
     );
}

export default Visual;