import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.f42};
    font-weight: 600;
    ${mixins.font('nexonLv1Gothic', '#000')}

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
    ${mixins.font('nexonLv1Gothic', '#333')}
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
    ${mixins.font('nexonLv1Gothic', '#000')}

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f20};
    `};

    &::before{
        content: ${(props) => props.bullet ? 'none' : "''"};
        display: inline-block;
        width: 16px;
        height: 4px;
        border-radius: 4px;
        margin-right: 10px;
        background-color: #333;
    }
`

export const SmallDesc = styled.p`
    display: ${props => props.openInNew && 'inline-flex'};
    align-items: ${props => props.openInNew && 'center'};
    margin-top: 10px;
    line-height: 27px;
    font-size: ${(props) => props.fz1 ? '1.125rem' : '1rem'};
    ${mixins.font('nexonLv1Gothic', '#333')}
    word-break: keep-all;
    
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
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `};

    ${({ theme }) => theme.mobile`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `};
`

export const MediumTitle = styled.h5`
    font-size: ${({ theme }) => theme.fontSizes.f20};
    font-weight: 600;
    ${mixins.font('nexonLv1Gothic', '#333')}

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
    background-color: #f2f2f2;
`

export const Inner = styled.div`
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

    &::before{
        content: ${(props) => props.bullet};
        position: absolute;
        top: 7px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #000;
    }
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

export const ImgBox = styled.figure`
    margin-left: ${(props) => props.ml};
    margin-top: ${(props) => props.mt};

    ${({ theme }) => theme.tablet`
        width: 100%;
        margin-top: 10px;
        margin-left: 0;

        &+&{margin-top: 0;}
    `};
`

export const CommonImg = styled.img`
    width: ${(props) => props.wd01 ? '80%' : '100%'};
    transition: all 0.3s ease-in-out;

    ${({ theme }) => theme.laptopL`
        width: 100%;
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
    border: 1px solid ${({ theme }) => theme.colors.ddd};
    border-radius: 4px;
    margin-top: 20px;

    +${GroupContainer}{
        margin-top: 60px;
    }
`

export const ListContainerInner = styled.div`
    padding: 50px 60px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.fff};

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
        height: 300px;
    `};

    ${({ theme }) => theme.mobile`
        width: 100%;
        height: auto;

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
    border-bottom: ${(props) => props.bb && '7px solid #dedede'};
`

export const DescArea = styled.div`

`

export const TitleGroup = styled.div`
    +${GroupContainer}{
        margin-top: 50px;
    }
`