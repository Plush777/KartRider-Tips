import * as Selectstyled from 'components/style/common/Select.style';
import { useLayoutEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as SCarrowDown } from 'static/svg/ico-select-arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';

const Select = () => {

    let [toggle,setToggle] = useState(false);
    let [selected,setSelected] = useState(null);
    let [selectState,setSelectState] = useState(null);
    let getSelectedValue = localStorage.getItem('selected');
    let dispatch = useDispatch();
    const { pathname } = useLocation();
    let commonKartbodyDesc = useSelector(state => state.kartbodyCommon);
    let commonCharacterName = useSelector(state => state.characterCommonName);

    useLayoutEffect(() => {
        if(pathname.startsWith('/kartbody')){
            setSelectState(commonKartbodyDesc);
        } else if(pathname.startsWith('/character')){
            setSelectState(commonCharacterName);
        }
    },[pathname,commonKartbodyDesc,commonCharacterName])

    useLayoutEffect(() => {
        if(getSelectedValue === null){
            setSelected('프로토');
        } else {
            setSelected(getSelectedValue);
        }
    },[getSelectedValue]);
   

    const handleClick = e => {
        setSelected(e.target.textContent);
        localStorage.setItem('selected',e.target.textContent);
        dispatch(setRouterScroll(false));
        setToggle(false);
    }

    const handleToggleSelect = () => {
        setToggle(!toggle);
    }

    return ( 
        <Selectstyled.SelectArea>
            <Selectstyled.Select onClick={handleToggleSelect} aria-expanded={toggle}>
                <Selectstyled.SelectTxt>{getSelectedValue === null ? selected : getSelectedValue}</Selectstyled.SelectTxt>
                <SCarrowDown width="20px" height="20px" fill="#333"/>
            </Selectstyled.Select>
            <Selectstyled.OptionList className="scY" maxHeight="150px" show={toggle}>
                {selectState.map((item, index) => {
                    return(
                        <Selectstyled.OptionItem key={index}>
                            <Selectstyled.OptionTxt to={`/kartbody/common/${item.id}`} onClick={handleClick}>{item.title}</Selectstyled.OptionTxt>
                        </Selectstyled.OptionItem>
                    )
                })}
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;