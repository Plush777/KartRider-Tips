import styled from "styled-components";
import { Swiper } from 'swiper/react';

export const VisualWrap = styled.div`
    width: 100%;
`

export const StyledSwiper = styled(Swiper)`
    position: relative;
`

export const VisualInner = styled.div`
    width: 100%;
    height: 600px;

    ${({ theme }) => theme.tablet`
       height: 380px;
    `}
`

export const ImgStyle = styled.img`
    position: absolute;
    width: 100% !important;
    height: 100% !important;
    z-index: -1;
    object-fit: cover;

    ${({ theme }) => theme.tablet`
       object-position: center top;
    `}
`