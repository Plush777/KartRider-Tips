import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SubVisualWrap = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 50px;
`

const SubViusalInner = styled.div`
    position: relative;
    height: 100%;
    background-image: url('../images/bg/bg-sub-visual-mode.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const SubVisualTitleArea = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

const SubVisualTitle = styled.h2`
    font-family: 'Noto Sans B';
    font-size: 60px;
    color: #fff;
`

const SubVisual = (props) => {

    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            props.setSubTitle('모드');
        } else if(pathname.startsWith('/cartbody')){
            props.setSubTitle('카트바디');
        } else if(pathname.startsWith('/character')){
            props.setSubTitle('캐릭터');
        } else if(pathname.startsWith('/track')){
            props.setSubTitle('트랙');
        }
    }, [pathname,props]);

    return ( 
        <SubVisualWrap>
            <SubViusalInner>
                <SubVisualTitleArea>
                    <SubVisualTitle>{props.subTitle}</SubVisualTitle>
                </SubVisualTitleArea>
            </SubViusalInner>
        </SubVisualWrap>
    );
}

export default SubVisual;