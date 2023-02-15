import styled from "styled-components";
import { Link } from "react-router-dom";
import mixins from '../style/mixins';

const Bar = styled.div`
    width: 100%;
    height: 48px;
    background-color: #4A8FE1;
`

const Txt = styled(Link)`
    ${mixins.whFull}
    ${mixins.aic}
    ${mixins.inner}
    ${mixins.font('nexonLv1Gothic','#fff')}
    font-size: .875rem;

    >strong{margin-right: 3px;}
`

const FootSupport = () => {
    return ( 
        <Bar>
            <Txt to="#"><strong>KartRider Tips Beta</strong>피드백 남기기</Txt>
        </Bar>
    );
}

export default FootSupport;