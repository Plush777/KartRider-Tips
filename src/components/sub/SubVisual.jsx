import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as SubVisualstyled from 'components/style/common/SubVisual.style';
import { useDispatch , useSelector } from "react-redux";
import { setSubVisualTitle } from "redux/store/store";

const SubVisual = () => {

    const { pathname } = useLocation();
    let [visualName,setVisualName] = useState('');
    let dispatch = useDispatch();
    let subVisualData = useSelector(state => state.subVisualTitle.value);

    useEffect(() => {
        if(pathname.startsWith('/mode')){
            dispatch(setSubVisualTitle({title:'모드'}));
            setVisualName('mode');
        } else if(pathname.startsWith('/kartbody')){
            dispatch(setSubVisualTitle({title:'카트바디'}));
            setVisualName('kartbody');
        } else if(pathname.startsWith('/character')){
            dispatch(setSubVisualTitle({title:'캐릭터'}));
            setVisualName('character');
        } else if(pathname.startsWith('/track')){
            dispatch(setSubVisualTitle({title:'카트바디'}));
            setVisualName('track');
        } else if(pathname.startsWith('/source')){
            dispatch(setSubVisualTitle({title:'출처'}));
            setVisualName('');
        } else if(pathname.startsWith('/purpose')){
            dispatch(setSubVisualTitle({title:'사이트 목적'}));
            setVisualName('');
        }
    }, [pathname,dispatch]);

    return ( 
        <SubVisualstyled.SubVisualWrap>
            <SubVisualstyled.SubViusalInner className={
            pathname.startsWith('/source') || pathname.startsWith('/purpose') ? 'gray' : null} 
            visualName={visualName}>
                <SubVisualstyled.SubVisualTitleArea>
                    <SubVisualstyled.SubVisualTitle>{subVisualData.title}</SubVisualstyled.SubVisualTitle>
                </SubVisualstyled.SubVisualTitleArea>
            </SubVisualstyled.SubViusalInner>
        </SubVisualstyled.SubVisualWrap>
    );
}

export default SubVisual;