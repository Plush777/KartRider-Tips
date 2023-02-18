import styled from "styled-components";
import mixins from 'components/style/mixins';

const Bar = styled.div`
    width: 100%;
    height: 48px;
    background-color: #1C559C;
`

const Txt = styled.a`
    ${mixins.whFull}
    ${mixins.aic}
    ${mixins.inner}
    ${mixins.font('nexonLv1Gothic','#fff')}
    font-size: .875rem;
    
    >strong{margin-right: 3px;font-weight: normal;}
`

const FootSupport = () => {
    return ( 
        <Bar>
            <Txt href="https://map64wlb3a2.typeform.com/to/vGp6k1Nc" target="_blank" rel="noopener noreferrer"><strong>KartRider Tips Beta</strong>피드백 남기기</Txt>
        </Bar>
    );
}

export default FootSupport;