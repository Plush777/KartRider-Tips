import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Bar = styled.div`
    width: 100%;
    height: 48px;
    padding: 0 16px;
    background-color: ${props => props.backgroundColor};

    ${({ theme }) => theme.tablet`
        height: 40px;
    `};
`;

export const Txt = styled.a`
    ${mixins.whFull}
    ${mixins.aic}
    ${mixins.inner}
    ${mixins.font('nexonLv1Gothic','#fff')}
    font-size: ${({ theme }) => theme.fontSizes.f14};
    word-break: keep-all;
    
    >strong{margin-right: 3px;font-weight: normal;}

    ${({ theme }) => theme.tablet`
        font-size: ${({ theme }) => theme.fontSizes.f12};
    `};

    ${({ theme }) => theme.small`
        font-size: ${({ theme }) => theme.fontSizes.f11};
    `};
`