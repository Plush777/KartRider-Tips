import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as SubVisualstyled from '../style/SubVisual.style';

const SubVisual = (props) => {

    const { pathname } = useLocation();
    let [visualName,setVisualName] = useState('');

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            props.setSubTitle('모드');
            setVisualName('mode');
        } else if(pathname.startsWith('/kartbody')){
            props.setSubTitle('카트바디');
            setVisualName('kartbody');
        } else if(pathname.startsWith('/character')){
            props.setSubTitle('캐릭터');
            setVisualName('character');
        } else if(pathname.startsWith('/track')){
            props.setSubTitle('트랙');
            setVisualName('track');
        }
    }, [pathname,props]);

    return ( 
        <SubVisualstyled.SubVisualWrap>
            <SubVisualstyled.SubViusalInner visualName={visualName}>
                <SubVisualstyled.SubVisualTitleArea>
                    <SubVisualstyled.SubVisualTitle>{props.subTitle}</SubVisualstyled.SubVisualTitle>
                </SubVisualstyled.SubVisualTitleArea>
            </SubVisualstyled.SubViusalInner>
        </SubVisualstyled.SubVisualWrap>
    );
}

export default SubVisual;