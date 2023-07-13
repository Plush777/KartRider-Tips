import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Top = styled.div`
    padding-bottom: 35px;
    border-bottom: 2px solid var(--kartIntroBottomStroke);

    ${({ theme }) => theme.tablet`
        padding-bottom: 30px;
    `};
`

export const PreviewArea = styled.div`
    position: relative;
    ${mixins.fc}
    width: inherit;
    height: 305px;
    border-radius: 8px;
    background-color: var(--skeletonBg);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .3);

    ${({ theme }) => theme.laptopL`
        img{
            width: 260px;
            height: 242px;
        }
    `};

    ${({ theme }) => theme.laptop`
        img{
            width: 220px;
            height: 205px;
        }
    `};

    ${({ theme }) => theme.tablet`
        display: none;
    `};
`

export const RowList = styled.dl`
    ${mixins.fcol};
    padding: 30px 0;
    border-bottom: 1px solid var(--kartIntroBottomStroke);
    row-gap: 20px;

    ${({ theme }) => theme.tablet`
        border-bottom: 0;
        padding: 0;
        padding-top: 20px;
        row-gap: 16px;
    `};
`

export const Row = styled.div`
    display: flex;
    column-gap: 85px;

    &:lang(en){
       column-gap: 55px;
    }
`

export const RowTitle = styled.dt`
    min-width: 76px;
    font-size: ${({ theme }) => theme.fontSizes.f20};
    ${mixins.font('nexonLv1Gothic', 'var(--kartIntroHeadText)')};

    &:lang(en){
        min-width: 131px;
    }

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`

export const RowDesc = styled(RowTitle)`
    word-break: keep-all;
`

export const Title = styled.h4`
    ${mixins.aic};
    ${mixins.font('nexonLv1Gothic', 'var(--title)')}
    font-size: 1.75rem;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f24};
    `};
`

export const Desc = styled.p`
    margin-top: 10px;
    line-height: 27px;
    word-break: keep-all;
    ${mixins.font('nexonLv1Gothic', 'var(--kartIntroDescText)')}
    font-size: 1.125rem;

    ${({ theme }) => theme.tablet`
       font-size: ${({ theme }) => theme.fontSizes.f16};
    `};
`