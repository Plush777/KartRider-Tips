import styled from "styled-components";
import mixins from 'components/style/mixins';

export const Bar = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${props => props.backgroundColor};
`;

export const Txt = styled.a`
    ${mixins.whFull}
    ${mixins.aic}
    ${mixins.inner}
    ${mixins.font('nexonLv1Gothic','#fff')}
    font-size: .875rem;
    
    >strong{margin-right: 3px;font-weight: normal;}
`