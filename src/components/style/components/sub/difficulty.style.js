import styled from "styled-components";
import mixins from 'components/style/mixins';

export const DiffWrap = styled.div`
    position: relative;
    width: 60px;
    height: 31px;
`

export const DiffArea = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    height: 100%;
    top: ${props => props.top};
    left: ${(props) => props.left};
    overflow: ${(props) => props.overflow};
    z-index: ${(props) => props.zIndex};
`

export const DiffBox = styled.div`
    ${mixins.whFull}
    background-image: ${(props) => props.bgUrl};
    background-repeat: no-repeat;
`