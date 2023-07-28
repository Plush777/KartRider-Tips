import styled, { css } from "styled-components";
import mixins from 'components/style/mixins';
import { ItemBox } from "../components/sub/Item.style";

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.f42};
    font-weight: 600;
    ${mixins.font('nexonLv1Gothic', 'var(--title)')}

    ${({ theme }) => theme.laptopL`
       font-size: ${({ theme }) => theme.fontSizes.f36};
    `};

    ${({ theme }) => theme.laptop`
       font-size: ${({ theme }) => theme.fontSizes.f30};
    `};

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f24};
    `};
`

export const Desc = styled.p`
    line-height: 27px;
    margin-top: 20px;
    ${mixins.font('nexonLv1Gothic', 'var(--text)')}
    font-size: ${({ theme }) => theme.fontSizes.f16};

    ${({ theme }) => theme.laptopL`
       word-break: keep-all;
    `};

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f14};
    `};

    ${({ theme }) => theme.tablet`
        margin-top: 10px;
    `};

    &+&{
        margin-top: 0;
    }
`

export const SmallTitle = styled.h4`
    ${mixins.aic};
    font-size: ${(props) => props.fz1 ? '1.75rem' : '1.5rem'};
    ${mixins.font('nexonLv1Gothic', 'var(--title)')}

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f20};
    `};

    ${props => props.type02 && css`
        margin-bottom: 10px;
        font-size: ${({ theme }) => theme.fontSizes.f16};
        font-weight: 600;

        ${({ theme }) => theme.tablet`
            font-size: ${({ theme }) => theme.fontSizes.f14};
        `};
    `}

    &::before{
        content: ${(props) => props.bullet ? 'none' : "''"};
        display: inline-block;
        width: 16px;
        height: 4px;
        border-radius: 4px;
        margin-right: 10px;
        background-color: var(--bulletBg);
    }
`

export const SmallDesc = styled.p`
    display: ${props => props.openInNew && 'inline-flex'};
    align-items: ${props => props.openInNew && 'center'};
    margin-top: 10px;
    line-height: 27px;
    font-size: ${(props) => props.fz1 ? '1.125rem' : '1rem'};
    ${mixins.font('nexonLv1Gothic', 'var(--text)')}
    word-break: keep-all;

    .source{
        margin-top: 60px;
    }

    >b{
        margin: 0 5px;
    }
    
    &::after{
        content: ${props => props.openInNew ? "'새창 열림'" : 'none'};
        width: 18px;
        height: 18px;
        font-size: 0;
        color: transparent;
        margin-top: -2.5px;
        margin-left: 5px;
        background: url('/images/common/ico-open-in-new.svg') no-repeat center;
    }

    ${({ theme }) => theme.tablet`
        font-size: ${props => props.mFz ? '0.875rem' : '1rem'};
    `};

    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `};

    &.dark{
        .openInNew >strong::after{
            background: url('/images/common/ico-open-in-new-w.svg') no-repeat center;
        }
    }

    .openInNew{display: inline-block;
        >strong{
            &::after{
                content: "새창 열림";
                position: relative;
                top: -2px;
                display: inline-block;
                width: 18px;
                height: 18px;
                font-size: 0;
                color: transparent;
                margin-left: 2px;
                background: url('/images/common/ico-open-in-new.svg') no-repeat center;
            }
        }
    }
`

export const MediumTitle = styled.h5`
    font-size: ${({ theme }) => theme.fontSizes.f20};
    font-weight: ${props => props.regular ? '400' : '600'};
    ${mixins.font('nexonLv1Gothic', 'var(--text)')}

    ${props => props.color === 'black' && css`
        color: var(--title);
    `}

    +${SmallDesc}{
        margin-top: 10px;
    }

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `};
    
    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`

export const Wrap = styled.div`
    width: 100%;
    min-height: calc(100vh - 511px);
    background-color: var(--subBgColor);
    transition: background .3s ease-in-out;

    ${({ theme }) => theme.tablet`
        min-height: calc(100vh - 469px);
    `}
`

export const Inner = styled.div`
    position: relative;
    ${mixins.inner}
    padding: 80px 16px;

    ${({ theme }) => theme.laptopL`
        padding: 36px 16px;
    `};

    ${({ theme }) => theme.small`
        padding: 26px 10px;
    `};
`

export const SkeletonArea = styled.div`
    width: ${(props) => props.wd};
    height: ${(props) => props.ht};

    ${({ theme }) => theme.laptopL`
        width: 100%;
        height: inherit;
    `};
`

export const GroupBox = styled.div`
    &+&{margin-top: 60px;}

    ${props => props.type01 && css`
        ${SmallDesc}{
            &.mt{
                margin-top: 20px !important;
            }

            +${SmallDesc}{
                margin-top: 0;
            }
        }
    `}

    ${props => props.mt && css`
        margin-top: 30px;

        &+&{margin-top: 30px;}
    `}

    ${props => props.mb && css`
        margin-bottom: 20px;
    `}

    ${props => props.inline && css`
        ${SmallDesc}{
            display: inline-block;
        }
    `}

    ${props => props.counter && css`
        margin-top: 15px !important;

        ${SmallDesc}{
            counter-increment:list-number;
            margin-top: 0;

            &::before{
                content:counter(list-number)".";
                margin-right: 5px;
            }
        }
    `}

    strong{
        margin: 0 4px;
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
    }

    +${SkeletonArea}{
        margin-top: 20px;
    }

    ${({ theme }) => theme.tablet`
        &+&{margin-top: 30px;}
    `};
`

export const GroupItem = styled.li`
    position: relative;
    margin-top: ${(props) => props.mt};
    
    ${SmallDesc}{
        padding-left: ${(props) => props.bullet && '15px'};
        margin-top: ${(props) => props.bullet && '0'};
    }

    ${SmallDesc}{
        padding-left: ${(props) => props.ico && '53px'};
    }

    &::before{
        content: ${(props) => props.bullet};
        position: absolute;
        top: 9px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--title);
    }

    &[data-name]{position: relative;
        ${SmallDesc}{
            &::before{
                content: '';
                position: absolute;
                left: 20px;
                width: 24px;
                height: 24px;
                background-size: 24px;
                background-repeat: no-repeat;
                background-position: center center;
            }
        }
    }

    &[data-name="mail"]{
        ${SmallDesc}{
            &::before{background-image: url('/images/common/ico-naver.png');}
        }
    }

    &[data-name="github"]{
        ${SmallDesc}{
            &::before{background-image: url('/images/common/ico-github.svg');}
        }

        &.dark{
            ${SmallDesc}{
                &::before{background-image: url('/images/common/ico-github-w.svg');}
            }
        }
    }

    &[data-name="instagram"]{
        ${SmallDesc}{
            &::before{background-image: url('/images/common/ico-instagram.png');}
        }
    }

    ${({ theme }) => theme.tablet`
        &[data-name]{
            ${SmallDesc}{
                &::before{
                    width: 22px;
                    height: 22px;
                    left: 15px;
                    background-size: 22px;
                }
            }
        }

        ${SmallDesc}{
            padding-left: ${(props) => props.ico && '45px'};
        }
    `};
`

export const GroupContainer = styled.div`
    &+&{margin-top: 60px;}
    .groupList{
        margin-top: 25px;

        ${({ theme }) => theme.tablet`
            margin-top: 15px;
        `};

        &.fir ${GroupItem}{
            &:first-child ${SmallDesc}{
                margin-top: 0;
            }
        }
    }
`

export const ImgWrap = styled.div`
    ${mixins.fcol};
    margin-top: 60px;

    ${({ theme }) => theme.mobile`
        margin-top: 50px;
    `};

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const CommonImg = styled.img`
    display: ${props => props.activeDisplay};
    aspect-ratio: ${props => props.ratio};
    transition: all 0.3s ease-in-out;
    border-radius: 6px;
    background: var(--skeletonBg);

    &.transparent{
        background: transparent;
        width: auto;
    }

    &.custom{
        width: ${props => props.width} !important;
        height: ${props => props.height} !important;
    }
`

export const ImgBox = styled.figure`
    flex: 1;
    margin-top: ${(props) => props.mt};

    ${props => props.hType01 && css`
        ${({ theme }) => theme.tablet`
            .skeleton{
                padding-top: 31.327%;
                max-width: none;
            }
        `}
    `}

    ${props => props.ignore && css`
        img{
            aspect-ratio: 400/118;
        }
    `}

    ${props => props.ignore2 && css`
        img{
            object-fit: none;
            aspect-ratio: 0;
            width: auto;
            background: transparent;
            margin: 0 auto;
        }
    `}

    ${({ theme }) => theme.tablet`
        width: 100%;
        margin-top: 10px;
        margin-left: 0;

        &+&{margin-top: 0;}

        img{
            &.transparent{
                width: 100%;
            }
        }
    `};
`

export const ImgGroup = styled.div`
    ${mixins.aic};
    column-gap: 30px;
    margin-top: 20px;

    ${({ theme }) => theme.tablet`
        ${mixins.fcol};
        column-gap: 0;
        row-gap: 15px;
    `};

    ${({ theme }) => theme.mobile`
        margin-top: 10px;
        row-gap: 5px;
    `};
`

export const ListContainer = styled.div`
    width: 100%;
    border: 1px solid var(--itemListStroke);
    border-radius: 20px;
    margin-top: 20px;

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const ListContainerInner = styled.div`
    padding: 50px 60px;
    border-radius: 20px;
    background-color: var(--itemListBg);

    ${({ theme }) => theme.laptopL`
        padding: 40px;
    `};

    ${({ theme }) => theme.laptop`
        padding: 33px;
    `};

    ${({ theme }) => theme.tablet`
        padding: 30px;
    `};

    ${({ theme }) => theme.mobile`
        padding: 16px;
    `};
`

export const ListBox = styled.ul`
    ${mixins.aic};
    flex-wrap: wrap;
    row-gap: 50px;

    ${({ theme }) => theme.laptopL`
        column-gap: 60px;
    `};

    ${({ theme }) => theme.tablet`
        column-gap: 40px;
        justify-content: space-between;
    `};

    ${({ theme }) => theme.mobile`
        row-gap: 40px;
        flex-direction: column;
        align-items: flex-start;
    `};
`

export const ListItem = styled.li`
   ${mixins.aic};
   column-gap: 25px;
   width: calc(100% / 2);

    ${ItemBox}{
        flex: 1;
    }

    ${({ theme }) => theme.laptopL`
        width: calc(100% / 2 - 60px);
    `};

    ${({ theme }) => theme.laptop`
        &:nth-child(even){
            width: 50%;
        }
    `};

    ${({ theme }) => theme.tablet`
        flex-direction: column;
        column-gap: 0;
        min-height: 300px;
    `};

    ${({ theme }) => theme.mobile`
        width: 100%;
        height: auto;
        min-height: auto;

        &:nth-child(even){
            width: 100%;
        }
    `};
`

export const TableArea = styled.div`
    margin-top: ${(props) => props.mt};

    ${({ theme }) => theme.tablet`
        overflow-x: auto;
        max-width: calc(100vw - 32px);
        table{
            width: 768px;
        }
    `};
`

export const Td = styled.td`
    border-bottom-color: ${(props) => props.bbc};
    color: ${(props) => props.color};
    background-color: ${(props) => props.bg};
`

export const TitleArea = styled.div`
    padding-bottom: ${(props) => props.pb && '20px'};
    border-bottom: ${(props) => props.bb && '7px solid var(--tabKartGroupStroke)'};
`

export const DescArea = styled.div`

`

export const TitleGroup = styled.div`
    +${GroupContainer}{
        margin-top: 50px;

        &.type02{
            ${({ theme }) => theme.tablet`
                margin-top: 25px;
            `};
        }
    }
`

export const Main = styled.main`
    ${({ theme }) => theme.tablet`
        padding-bottom: 55px;
    `};
`

export const Dimmed = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.3);
    z-index: 1010;

    &.none{
        display: none;
    }

    &.active{
        display: block;
    }
`

export const DimmedHidden = styled(Dimmed).attrs({ 'aria-hidden': 'true' })``

export const Ico = styled.i`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    z-index: ${props => props.zIndex};

    svg{
        fill: var(--infoSvg);
    }
`

export const GroupList = styled.ul`
    ${mixins.fcol};
    row-gap: 10px;
`

export const AccordionArea = styled.div`
    margin-top: 60px;
`

export const AccordionButton = styled.button.attrs({ type: 'button' })`
    ${mixins.aic};
    ${mixins.font('nexonLv1Gothic', 'var(--title)')};
    column-gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes.f20};

    ${({ theme }) => theme.tablet`
        position: relative;
        width: 100%;
        text-align: left;
        padding-right: 35px;

        >svg{
            position: absolute;
            right: 0;
            top: -1px;
        }
    `};

    >svg{
        transition: .3s ease-in-out;
        transform: rotate(180deg);

        path[d="M16.59 15.41 12 10.83l-4.59 4.58L6 14l6-6 6 6-1.41 1.41Z"]{
            fill: var(--text);
        }

        &.on{
            transform: rotate(0deg);
        }
    }
`

export const AccordionContent = styled.div`
    padding-top: ${props => props.type01 ? '20px' : '30px'};

    .accTitle{
        margin-bottom: 10px;
        font-size: ${({ theme }) => theme.fontSizes.f16};
        font-weight: 400;
    }

    ${ImgWrap},${Desc}{
        margin-top: 0;
    }

    ${ImgWrap}{
        ${GroupBox}{
            +${GroupBox}{
                margin-top: 30px;
            }
        }

        +${ImgWrap}{
            margin-top: 60px;
        }
    }
`

export const AccordionGroup = styled.div`
    &+&{
        margin-top: 100px;
    }
`

export const ImgInnerBox = styled.div`
    margin-top: 60px;

    ${({ theme }) => theme.tablet`
        margin-top: 30px;
    `}
`

export const GroupInnerBox = styled.ul`
    ${props => props.type === 'marginTop01' && css`
        margin-top: 20px;
    `}

    ${props => props.indent === 'type01' && css`
        padding-left: 40px;
    `}
`

export const GroupInnerBoxItem = styled.li`
    ${mixins.font('nexonLv1Gothic', 'var(--text)')};
   
    ${props => props.type === 'bullet' && css`
        >span{
            padding-left: 15px;
            
            &::before{
                content: '';
                position: absolute;
                top: 4.5px;
                left: 0;
                border-radius: 50%;
                width: 6px;
                height: 6px;
                background-color: var(--text);
            }
        }
    `}

    &+&{
        margin-top: 10px;
    }

    >span{
        position: relative;
        display: block;
        line-height: 20px;
    }
`

export const ArrowRightDesc = styled.div`
    ${mixins.aic};
    justify-content: flex-end;
    ${mixins.font('nexonLv1Gothic', 'var(--title)')};
    margin-top: 7px;
    max-width: 513px;
    font-size: ${({ theme }) => theme.fontSizes.f14};

    .more{
        ${mixins.aic};
    }
`

export const ColorDiv = styled.div`
    display: block;
    color: #888;
    font-style: ${props => props.fontStyle};
`