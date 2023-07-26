import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Page = styled.div`
    position: absolute;
    width: 410px;
    height: 500px;
    transform-origin: 0 0;
    transition: transform 1.4s;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    box-shadow: 3px 7px 12px rgba(0, 0, 0, 0.253);

    &:nth-child(odd){
        pointer-events: all;
        transform: rotateY(0deg);
        right: 0;
    }

    &:nth-child(even){
        pointer-events: none;
        transform: rotateY(180deg);
        transform-origin: 100% 0;
        left: 0;
    }

    &.flipped:nth-child(odd){
        transform: rotateY(-180deg);
        pointer-events: none;
    }

    &.flipped:nth-child(even){
        transform: rotateY(0deg);
        pointer-events: all;
    }

    &.first{
        background: url("/images/common/img-book-front.jpg") no-repeat center;
        background-size: 410px 500px;
        z-index: 6;
    }

    &.end{
        background: url("/images/common/img-book-back.webp") no-repeat center;
        background-size: auto 500px;
        z-index: 6;

        &:nth-child(odd),&:nth-child(even){
            pointer-events: none;
            transform: rotateY(180deg);
            transform-origin: 100% 0;
            left: 0;
            right: auto;

            &.flipped{
                transform: rotateY(0deg);
                pointer-events: all;
            }
        }
    }

    &:not(.first):not(.end){
        background: url('/images/common/img-paper.webp') no-repeat center;
    }

    @media (max-width: 1300px){
        &:nth-child(odd),&:nth-child(even){
            pointer-events: none;
            transform: rotateY(180deg);
            transform-origin: 100% 0;
            left: 0;
            right: auto;
            z-index: 1;

            &.flipped{
                transform: rotateY(0deg);
                pointer-events: all;
            }
        }

        &.first{
            pointer-events: all;
            left: auto;
            right: 0;
            transform: rotateY(0deg);
            transform-origin: 0 100%;

            &.flipped{
                transform: rotateY(-180deg);
                pointer-events: none;
            }
        }
    }

    @media (max-width: 820px){
        width: 100%;
        height: 100%;
        
        &.first{
            background-size: 100% 100%;
        }

        &:not(.first):not(.end){
            background-size: 100%;
        }

        &.end{
            background-size: auto 100%;
        }
    }
`

export const BookWrap = styled.div`
    perspective: 2000px;
    max-width: 820px;
    height: 500px;
    transition: margin-left .3s ease-in-out;
    transform-style: preserve-3d;

    &.active{
        margin-left: 220px;
    }

    &.closed{
        margin-left: 440px;
    }

    @media (max-width: 1300px){
        ${mixins.jcc};
        margin: 0 auto;

        &.active,&.closed{
            margin: 0 auto;
        }
    }

    @media (max-width: 820px){
        width: 100%;
        max-width: none;
    }

    ${({ theme }) => theme.mobile`
        height: auto;
    `}
`

export const PageWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    @media (max-width: 1300px){
        width: 50%;
    }

    @media (max-width: 820px){
        width: 100%;
    }

    ${({ theme }) => theme.mobile`
        padding-bottom: 107.067%;
    `}
`

export const Prev = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 50px;
    height: 50px;
`

export const Next = styled(Prev)`
    left: auto;
    right: 0;
`

export const PageTitle = styled.h2`
    text-align: center;
    color: #000;
    ${mixins.font('nexonLv1Gothic','#000')}
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.f16};
    padding-top: 15px;
`

export const PageContent = styled.div`
    padding: 12px 8px;
    overflow-y: auto;
    max-height: calc(100% - 33px);

    &::-webkit-scrollbar{
        width: 11px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #666;
    }
    
    &::-webkit-scrollbar-track{
        background-color: transparent;
    }
`

export const PageContentText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.f14};
    ${mixins.font('nexonLv1Gothic','#222')}
    word-break: keep-all;
    line-height: 18px;

    &+&{
        margin-top: 20px;
    }
`