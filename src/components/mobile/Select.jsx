import * as Selectstyled from 'components/style/common/Select.style';
import { useCallback, useLayoutEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as SCarrowDown } from 'static/svg/ico-select-arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';

const Select = () => {

    let [toggle,setToggle] = useState(false);
    let [selected,setSelected] = useState(
        {kart: null},
        {character: null}
    );
    let [selectState,setSelectState] = useState(
        {kart: null},
        {character: null}
    )
    
    let getSelectedKartValue = localStorage.getItem('selectedKartbody');
    let getSelectedCharacterValue = localStorage.getItem('selectedCharacter');
    let dispatch = useDispatch();
    const { pathname } = useLocation();
    let commonKartbodyDesc = useSelector(state => state.kartbodyCommon);
    let commonCharacterName = useSelector(state => state.characterCommonName);

    const getSelectedKart = useCallback(() => {
        if(getSelectedKartValue === null){
            setSelectState({kart: commonKartbodyDesc});
            setSelected({kart: '프로토'});
        } else {
            setSelected({kart: getSelectedKartValue});
        }
    },[commonKartbodyDesc,getSelectedKartValue]);

    const getSelectedCharacter = useCallback(() => {
        if(getSelectedCharacterValue === null){
            setSelectState({character: commonCharacterName});
            setSelected({character: '배찌'});
        } else {
            setSelected({character: getSelectedCharacterValue});
        }
    },[commonCharacterName,getSelectedCharacterValue]);

    useLayoutEffect(() => {
        if(pathname.startsWith('/kartbody')){
            getSelectedKart();
        } else if(pathname.startsWith('/character')){
            getSelectedCharacter();
        }
    },[pathname,getSelectedKart,getSelectedCharacter])


    const handleClick = e => {
        setSelected(
            {kart: e.target.textContent},
            {character: e.target.textContent}
        )
        localStorage.setItem('selectedKartbody',e.target.textContent);
        localStorage.setItem('selectedCharacter',e.target.textContent);
        dispatch(setRouterScroll(false));
        setToggle(false);
    }

    const handleToggleSelect = () => {
        setToggle(!toggle);
    }

    return ( 
        <Selectstyled.SelectArea>
            <Selectstyled.Select onClick={handleToggleSelect} aria-expanded={toggle}>
                {pathname.startsWith('/kartbody') &&
                    <Selectstyled.SelectTxt>{getSelectedKartValue === null ? selected.kart : getSelectedKartValue}</Selectstyled.SelectTxt>
                }
                {pathname.startsWith('/character') &&
                    <Selectstyled.SelectTxt>{getSelectedCharacterValue === null ? selected.character : getSelectedCharacterValue}</Selectstyled.SelectTxt>
                }
                <SCarrowDown width="20px" height="20px" fill="#333"/>
            </Selectstyled.Select>
            <Selectstyled.OptionList className="scY" maxHeight="150px" show={toggle}>
                {
                    selectState.character ?
                    commonCharacterName.map((item,index) => {
                        return (
                            <Selectstyled.OptionItem key={index}>
                                <Selectstyled.OptionTxt as="span" onClick={handleClick}>{item.name}</Selectstyled.OptionTxt>
                            </Selectstyled.OptionItem>
                        )
                    }) :
                    
                     selectState.kart ?
                        commonKartbodyDesc.map((item,index) => {
                            return (
                                <Selectstyled.OptionItem key={index}>
                                    <Selectstyled.OptionTxt to={`/kartbody/common/${item.id}`} onClick={handleClick}>{item.title}</Selectstyled.OptionTxt>
                                </Selectstyled.OptionItem>
                            )
                        }) 
                        
                    : null
                }
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;