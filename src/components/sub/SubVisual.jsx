import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as SubVisualstyled from '../style/SubVisual.style';

const SubVisual = (props) => {

    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            props.setSubTitle('모드');
        } else if(pathname.startsWith('/kartbody')){
            props.setSubTitle('카트바디');
        } else if(pathname.startsWith('/character')){
            props.setSubTitle('캐릭터');
        } else if(pathname.startsWith('/track')){
            props.setSubTitle('트랙');
        }
    }, [pathname,props]);

    return ( 
        <SubVisualstyled.SubVisualWrap>
            <SubVisualstyled.SubViusalInner>
                <SubVisualstyled.SubVisualTitleArea>
                    <SubVisualstyled.SubVisualTitle>{props.subTitle}</SubVisualstyled.SubVisualTitle>
                </SubVisualstyled.SubVisualTitleArea>
            </SubVisualstyled.SubViusalInner>
        </SubVisualstyled.SubVisualWrap>
    );
}

export default SubVisual;