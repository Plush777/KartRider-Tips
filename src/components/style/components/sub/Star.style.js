import styled from "styled-components";
import mixins from '../../mixins';

export const StarWrap = styled.div`
    position: relative;
    width: 143px;
    height: 31px;
`

export const StarArea = styled.div`
    position: absolute;
    width: ${(props) => props.width};
    height: 100%;
    top: -5px;
    left: ${(props) => props.left};
    overflow: ${(props) => props.overflow};
    z-index: ${(props) => props.zIndex};
`

export const StarBox = styled.div`
    ${mixins.whFull}
    background-image: ${(props) => props.bgUrl};
    background-repeat: no-repeat;
`