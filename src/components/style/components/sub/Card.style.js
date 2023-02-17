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
    perspective: 1000px;
`

export const CardItem = styled.div`
    position: absolute;
    left: 0;
    top: ${(props) => props.back && '-288px'};
    ${mixins.whFull};
    padding: 12px;
    border-radius: 4px;
    backface-visibility: hidden;
    transform: ${(props) => props.back && 'rotateY(180deg)'};
`

export const Card = styled.div`
    transform-style: preserve-3d;
    transition: all .8s;
    ${mixins.whFull}

    &[data-name="bazzi"]{
        ${CardItem}{background-color: #FF7C67;}
    }
    &[data-name="dao"]{
        ${CardItem}{background-color: #59BBFF;}
    }
    &[data-name="dizini"]{
        ${CardItem}{background-color: #FFBF34;}
    }
    &[data-name="marid"]{
        ${CardItem}{background-color: #FF82B8;}
    }
    &[data-name="brodi"]{
        ${CardItem}{background-color: #FFD700;}
    }
    &[data-name="chris"]{
        ${CardItem}{background-color: #58365F;}
    }
    &[data-name="neo"]{
        ${CardItem}{background-color: #CD0C22;}
    }
    &[data-name="sophia"]{
        ${CardItem}{background-color: #333;}
    }
    &[data-name="mos"]{
        ${CardItem}{background-color: #FF8800;}
    }
    &[data-name="uni"]{
        ${CardItem}{background-color: #FF9663;}
    }
    &[data-name="airi"]{
        ${CardItem}{background-color: #E5DC86;}
    }
    &[data-name="eihi"]{
        ${CardItem}{background-color: #99CC00;}
    }
    &[data-name="rex"]{
        ${CardItem}{background-color: #DC001B;}
    }
    &[data-name="kephi"]{
        ${CardItem}{background-color: #B54EFF;}
    }
    &[data-name="kephi"]{
        ${CardItem}{background-color: #B54EFF;}
    }
    &[data-name="brian"]{
        ${CardItem}{background-color: #AC6730;}
    }
    &[data-name="raive"]{
        ${CardItem}{background-color: #C1669D;}
    }
`

export const CardItemBox = styled.li`
    position: relative;
    width: 100%;
    height: 288px;
    overflow: hidden;

    &:hover{
        ${Card}{
            transform: rotateY(180deg);
        }
    }

    &::before{
        content: '';
        position: absolute;
        left: -100px;
        top: -100px;
        z-index: 1;
        width: 221px;
        height: 218px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.15);
    }

    [data-name="bazzi"]:last-child ${CardItem}{
        background-color: #D04B35;
    }

    [data-name="dao"]:last-child ${CardItem}{
        background-color: #0E73C9;
    }

    [data-name="dao"]:last-child ${CardItem}{
        background-color: #EA9A1C;
    }

    [data-name="marid"]:last-child ${CardItem}{
        background-color: #D63B79;
    }

    [data-name="brodi"]:last-child ${CardItem}{
        background-color: #BEA000;
    }

    [data-name="chris"]:last-child ${CardItem}{
        background-color: #492D4F;
    }

    [data-name="neo"]:last-child ${CardItem}{
        background-color: #B50D20;
    }

    [data-name="sophia"]:last-child ${CardItem}{
        background-color: #B50D20;
    }

    [data-name="mos"]:last-child ${CardItem}{
        background-color: #DD7601;
    }

    [data-name="uni"]:last-child ${CardItem}{
        background-color: #DA6329;
    }

    [data-name="airi"]:last-child ${CardItem}{
        background-color: #B8B06E;
    }

    [data-name="eihi"]:last-child ${CardItem}{
        background-color: #2A9422;
    }

    [data-name="rex"]:last-child ${CardItem}{
        background-color: #980113;
    }

    [data-name="kephi"]:last-child ${CardItem}{
        background-color: #9748CF;
    }

    [data-name="brian"]:last-child ${CardItem}{
        background-color: #935829;
    }

    [data-name="raive"]:last-child ${CardItem}{
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