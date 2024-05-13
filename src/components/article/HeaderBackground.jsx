import styled from "styled-components";
import { blankUrl } from "const";

const HeaderBackgroundDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: url('/images/common/img-nexon-header.png') no-repeat center;
    z-index: 10;
`

const HeaderLinkDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 60px;
    margin-left: -7.5px;
    background-color: transparent;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }
`

const HeaderBackground = ({ hiddenText }) => {
    return(
        <HeaderBackgroundDiv>
            <HeaderLinkDiv>
                <a href={blankUrl.nexon} target="_blank" rel="noreferrer">
                    <span className="hidden">{hiddenText}</span>
                </a>
            </HeaderLinkDiv>
        </HeaderBackgroundDiv>
    )
}

export default HeaderBackground;