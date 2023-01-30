import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import VisualCenter from "../article/VisualCenter";
import * as Visualstyled from "../style/Visual.style";

const Visual = () => {

    /* https://stackoverflow.com/questions/72493824/how-to-preload-images-in-react */
    const slideImg = [
        "../images/bg/bg-visual-01.webp",
        "../images/bg/bg-visual-02.webp",
        "../images/bg/bg-visual-03.webp",
        "../images/bg/bg-visual-04.webp"
    ];

    for (const img of slideImg){
        const imageElement = new Image();
        imageElement.src = img;
    }

    SwiperCore.use([Autoplay, EffectFade]);
    
    return ( 
        <Visualstyled.VisualWrap>
            <Visualstyled.StyledSwiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{delay: 3000}}
                effect={"fade"}
                allowTouchMove={false}>

                {slideImg.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Visualstyled.ImgStyle src={item} alt="메인 비주얼 이미지"/>
                            <VisualCenter/>
                        </SwiperSlide>
                    )
                })}
            </Visualstyled.StyledSwiper>
        </Visualstyled.VisualWrap>
     );
}

export default Visual;