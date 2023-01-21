import styled from "styled-components";
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";

const VisualWrap = styled.div`
    width: 100%;
    height: 600px;
`

const StyledSwiper = styled(Swiper)`
    height: 100%;
`

const slideImg = [
    {src: "../images/bg/bg-visual-01.png"},
    {src: "../images/bg/bg-visual-02.jpg"},
    {src: "../images/bg/bg-visual-03.jpg"},
    {src: "../images/bg/bg-visual-04.jpg"}
];

const Visual = () => {
    return ( 
        <>
            <VisualWrap>
                <StyledSwiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop
                    autoplay={{delay: 100}}>
                    {slideImg.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt="메인 비주얼 이미지"/>
                            </SwiperSlide>
                        )
                    })}
                </StyledSwiper>
            </VisualWrap>
        </>
     );
}

export default Visual;