import { useState , useEffect } from "react";
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
    let [visualTitle, setVisualTitle] = useState('');

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            setVisualTitle('모드');
        }
    }, [pathname]);

    return ( 
        <SubVisualWrap>
            <SubViusalInner>
                <SubVisualTitleArea>
                    <SubVisualTitle>{visualTitle}</SubVisualTitle>
                </SubVisualTitleArea>
            </SubViusalInner>
        </SubVisualWrap>
    );
}

export default SubVisual;