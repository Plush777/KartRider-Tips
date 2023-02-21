import styled from "styled-components";
import mixins from 'components/style/mixins';

export const CardWrap = styled.div`
    margin-top: 30px;
`

export const CardList = styled.ul`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 32px;
`

export const CardItem = styled.div`
    position: absolute;
    left: 0;
    top: ${(props) => props.back && '0'};
    ${mixins.whFull};
    padding: 12px;
    border-radius: 4px;
    backface-visibility: hidden;
    transform: ${(props) => props.back && 'rotateY(180deg)'};
    background-repeat: no-repeat;
    background-position: center center;
`

export const Card = styled.div`
    position: absolute;
    top: 0;
    transform-style: preserve-3d;
    transition: all 1s;
    ${mixins.whFull}

    &[data-index="0"]{
        ${CardItem}{
            background-color: #FF7C67;
            background-image: url('/images/character/img-bazzi.png');
        }
    }
    &[data-index="1"]{
        ${CardItem}{
            background-color: #59BBFF;
            background-image: url('/images/character/img-dao.png');
        }
    }
    &[data-index="2"]{
        ${CardItem}{
            background-color: #FFBF34;
            background-image: url('/images/character/img-dizini.png');
        }
    }
    &[data-index="3"]{
        ${CardItem}{
            background-color: #FF82B8;
            background-image: url('/images/character/img-marid.png');
            background-position-x: -240px;
        }
    }
    &[data-index="4"]{
        ${CardItem}{
            background-color: #FFD700;
            background-image: url('/images/character/img-brodi.png');
            background-position-y: -52px;
        }
    }
    &[data-index="5"]{
        ${CardItem}{
            background-color: #58365F;
            background-image: url('/images/character/img-chris.png');
            background-position-y: -52px;
        }
    }
    &[data-index="6"]{
        ${CardItem}{
            background-color: #CD0C22;
            background-image: url('/images/character/img-neo.png');
        }
    }
    &[data-index="7"]{
        ${CardItem}{
            background-color: #333;
            background-image: url('/images/character/img-sophia.png');
            background-position: -226px -50px;
        }
    }
    &[data-index="8"]{
        ${CardItem}{
            background-color: #FF8800;
            background-image: url('/images/character/img-mos.png');
        }
    }
    &[data-index="9"]{
        ${CardItem}{
            background-color: #FF9663;
            background-image: url('/images/character/img-uni.png');
            background-position-y: 0;
        }
    }
    &[data-index="10"]{
        ${CardItem}{
            background-color: #E5DC86;
            background-image: url('/images/character/img-airi.png');
            background-position-y: -7px;
        }
    }
    &[data-index="11"]{
        ${CardItem}{
            background-color: #99CC00;
            background-image: url('/images/character/img-eihi.png');
            background-position-x: -221px;
        }
    }
    &[data-index="12"]{
        ${CardItem}{
            background-color: #DC001B;
            background-image: url('/images/character/img-rex.png');
            background-position-x: -210px;
        }
    }
    &[data-index="13"]{
        ${CardItem}{
            background-color: #B54EFF;
            background-image: url('/images/character/img-kephi.png');
            background-position-y: -50px;
        }
    }
    &[data-index="14"]{
        ${CardItem}{
            background-color: #AC6730;
            background-image: url('/images/character/img-brian.png');
            background-position-y: -45px;
        }
    }
    &[data-index="15"]{
        ${CardItem}{
            background-color: #C1669D;
            background-image: url('/images/character/img-raive.png');
            background-position-y: -41px;
        }
    }
`

export const CardItemBox = styled.li`
    position: relative;
    width: 100%;
    height: 288px;
    perspective: 2000px;

    @media (hover: hover) {
        &:hover{
            ${Card}{
                transform: rotateY(180deg);
            }
        }
    }

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 221px;
        height: 218px;
        background: url('/images/common/img-circle-rgba.svg') no-repeat;
    }

    [data-index]:last-child ${CardItem}{
        background-image: none;
    }

    [data-index="0"]:last-child ${CardItem}{
        background-color: #D04B35;
    }

    [data-index="1"]:last-child ${CardItem}{
        background-color: #0E73C9;
    }

    [data-index="2"]:last-child ${CardItem}{
        background-color: #EA9A1C;
    }

    [data-index="3"]:last-child ${CardItem}{
        background-color: #D63B79;
    }

    [data-index="4"]:last-child ${CardItem}{
        background-color: #BEA000;
    }

    [data-index="5"]:last-child ${CardItem}{
        background-color: #492D4F;
    }

    [data-index="6"]:last-child ${CardItem}{
        background-color: #B50D20;
    }

    [data-index="7"]:last-child ${CardItem}{
        background-color: #B50D20;
    }

    [data-index="8"]:last-child ${CardItem}{
        background-color: #DD7601;
    }

    [data-index="9"]:last-child ${CardItem}{
        background-color: #DA6329;
    }

    [data-index="10"]:last-child ${CardItem}{
        background-color: #B8B06E;
    }

    [data-index="11"]:last-child ${CardItem}{
        background-color: #2A9422;
    }

    [data-index="12"]:last-child ${CardItem}{
        background-color: #980113;
    }

    [data-index="13"]:last-child ${CardItem}{
        background-color: #9748CF;
    }

    [data-index="14"]:last-child ${CardItem}{
        background-color: #935829;
    }

    [data-index="15"]:last-child ${CardItem}{
        background-color: #9F5281;
    }
`

export const CardInner = styled.div`
    position: relative;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 4px;
`

export const NameBox = styled.div`
    height: 100%;
    ${mixins.fcol};
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
`

export const Name = styled.h4`
    ${mixins.font('nexonLv1Gothic', '#fff')};
    font-size: ${(props) => props.ko ? ({theme}) => theme.fontSizes.f24 : ({theme}) => theme.fontSizes.f18};
    text-transform: ${(props) => props.ko ? 'none' : 'uppercase'};
`

export const DescBox = styled.div`
    ${mixins.fcc};
    height: 100%;
    row-gap: 20px;
`

export const Desc = styled.p`
    text-align: center;
    ${mixins.font('nexonLv1Gothic', '#fff')};
    font-size: ${({theme}) => theme.fontSizes.f14};
    font-weight: ${(props) => props.bold ? '600' : '400'};
    line-height: ${(props) => props.lineHeight && '1.3'};
    &::before{
        content: ${(props) => props.quote && 'open-quote'};
        margin-right: 2px;
    };
    &::after{
        content: ${(props) => props.quote && 'close-quote'};
        margin-left: 2px;
    };
`