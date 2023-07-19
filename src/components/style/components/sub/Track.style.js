import styled from "styled-components";
import mixins from 'components/style/mixins';
import { DiffArea } from "./difficulty.style";

export const Wrap = styled.div`
    margin-top: 40px;
`

export const ListWrap = styled.div`

`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 30px;

    @media (max-width: 1330px){
        grid-template-columns: repeat(3, 1fr);
    }

    ${({ theme }) => theme.laptop`
        grid-template-columns: repeat(2,1fr);
    `}

    ${({ theme }) => theme.tablet`
        ${mixins.fcol};
    `}
`

export const Item = styled.li`
    ${mixins.fcol}
    width: 100%;

    ${({ theme }) => theme.tablet`
        height: auto;
    `}
`

export const Top = styled.div`
    position: relative;

    >img{
        border-radius: 6px;
        object-fit: none;
    }

    @media (max-width: 1330px){
        >img{
            width: 100%;
        }
    }

    ${({ theme }) => theme.tablet`
        >img{
            height: 100%;
        }
    `}
`

export const TopGroupWrap = styled.div`
    position: absolute;
    top: 8px;
    left: 4px;
    ${mixins.aic}
    justify-content: space-between;
    width: calc(100% - 15px);

    .licenseInfo{
        position: relative;
    }

    ${({ theme }) => theme.mobile`
        .licenseInfo{
            width: 30px;
            height: 30px;
        }
    `}
`

export const TopGroup = styled.div`
    ${mixins.aic}
    column-gap: 5px;

    ${DiffArea}{
        top: 5px;
    }

    ${({ theme }) => theme.mobile`
        &.right{
            img{
                width: 24px;
                height: 24px;
            }
        }

        ${DiffArea}{
            top: 6px;
        }
    `}
`

export const Bottom = styled.div`
    margin-top: 15px;
    ${mixins.fcol}
    row-gap: 8px;

    >a{
        margin-top: 15px;
    }
`

export const Title = styled.h3`
    ${mixins.font('nexonLv1Gothic','var(--text)')}
    font-size: ${({ theme }) => theme.fontSizes.f24};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f18};
    `}
`

export const Date = styled.span`
    ${mixins.font('nexonLv1Gothic','var(--text)')}
    font-size: ${({ theme }) => theme.fontSizes.f18};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f16};
    `}
`

export const Lap = styled.span`
    ${mixins.font('nexonLv1Gothic','var(--text)')}
    font-size: ${({ theme }) => theme.fontSizes.f16};

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f14};
    `}
`