import styled from 'styled-components';
import mixins from 'components/style/mixins';

export const Box = styled.div`
    margin-top: 150px;
    &+&{margin-top: 150px;}

    ${({ theme }) => theme.laptop`
        margin-top: 100px;

        &+&{margin-top: 100px;}
    `};

    ${({ theme }) => theme.tablet`
        margin-top: 70px;

        &+&{margin-top: 70px;}
    `};
`

export const Title = styled.h2`
    position: relative;
    ${mixins.aic};
    ${mixins.font('nexonLv1Gothic', 'var(--title)')}
    font-size: 2rem;
    margin-bottom: 20px;

    &:lang(ja){
        &::before{top: 4px;}
    }

    >div{margin-right: 7px;
        svg{
            width: 45px !important;
            height: 45px !important;
        }
    }

    ${({ theme }) => theme.laptop`
        font-size: 1.75rem;
        padding-left: 40px;

        &::before{
            width: 32px;
            height: 32px;
            background-size: 32px;
        }
    `};

    ${({ theme }) => theme.tablet`
        font-size: 1.375rem;
        padding-left: 33px;

        &::before{
            width: 26px;
            height: 26px;
            background-size: 26px;
        }
    `};
`

export const Head = styled.div`
    margin-top: 20px;

    ${({ theme }) => theme.tablet`
        margin-top: 12px;
    `};
`

export const HeadTitle = styled.h3`
   font-size: ${({ theme }) => theme.fontSizes.f24};
   ${mixins.font('nexonLv1Gothic', 'var(--title)')}

   ${({ theme }) => theme.laptop`
        font-size: 1.375rem;
    `};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`

export const Bottom = styled.div`
    margin-top: 10px;
    ${mixins.aic};
    ${({ theme }) => theme.tablet`
        margin-top: 8px;
    `};
`

export const BottomDescription = styled.p`
    ${mixins.aic};
    font-size: ${({ theme }) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic', 'var(--videoDesc)')}

    &::after{
        content: '';
        width: 1px;
        height: 18px;
        margin: 0 15px;
        background-color: #626262;
    }

    &:last-of-type::after{display: none;}

    ${({ theme }) => theme.laptop`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f16};

        &::after{
            margin: 0 10px;
        }
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `};
`

export const Group = styled.ul`
    display: ${props => props.display};
    align-items: center;
    grid-template-columns: ${props => props.gtc};
    column-gap: 20px;
    row-gap: ${props => props.rg};

    ${({ theme }) => theme.laptop`
        flex-direction: column;
        row-gap: 40px;
        grid-template-columns: 1fr;
    `};

    &+&{margin-top: 60px;}
`

export const Item = styled.li`
    ${mixins.fcol};
    flex: ${props => props.flex};
    height: 100%;

    ${({ theme }) => theme.laptop`
        flex: none;
        width: 100%;
        height: auto;
    `};
`

export const Thumbnail = styled.div`
    border-radius: 8px;
    overflow: hidden;
`

export const Img = styled.img`
    aspect-ratio: 5.339/3;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.16);
    transition: .3s ease-in-out;
`

export const Link = styled.a`   
    @media (hover: hover) {
        &:hover{
            ${Img}{transform: scale(1.05);}
        }
    }
`