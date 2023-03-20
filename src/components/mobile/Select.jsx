import * as Selectstyled from 'components/style/common/Select.style';
import { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as SCarrowDown } from 'static/svg/ico-select-arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';

const Select = () => {

    let commonKartbodyDesc = useSelector(state => state.kartbodyCommon);
    let commonCharacterName = useSelector(state => state.characterCommonName);
    let [toggle,setToggle] = useState(false);
    let [selected,setSelected] = useState(
        {
            kart: '프로토',
            character: '배찌'    
        }
    );
    
    let dispatch = useDispatch();
    const { pathname } = useLocation();

    const handleSelectClick = (key, e) => {
        setSelected(prev => {
            return {
                ...prev,
                [key]: e.target.textContent
            }
        });
        dispatch(setRouterScroll(false));
        setToggle(false);
    };

    const handleKartClick = e => {
        handleSelectClick('kart', e);
    };
    
    const handleCharacterClick = e => {
        handleSelectClick('character', e);
    };

    const handleToggleSelect = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        console.log('selected state updated', selected);
    }, [selected])

    return ( 
        <Selectstyled.SelectArea>
            <Selectstyled.Select onClick={handleToggleSelect} aria-expanded={toggle}>
                {pathname.startsWith('/kartbody') &&
                    <Selectstyled.SelectTxt>{selected.kart}</Selectstyled.SelectTxt> 
                }

                {pathname.startsWith('/character') && 
                    <Selectstyled.SelectTxt>{selected.character}</Selectstyled.SelectTxt>
                }
                <SCarrowDown width="20px" height="20px" fill="#333"/>
            </Selectstyled.Select>
            <Selectstyled.OptionList className="scY" maxHeight="150px" show={toggle}>
                {
                    pathname.startsWith('/character') &&
                    commonCharacterName.map((item,index) => {
                        return (
                            <Selectstyled.OptionItem key={index}>
                                <Selectstyled.OptionTxt as="span" onClick={handleCharacterClick}>{item.name}</Selectstyled.OptionTxt>
                            </Selectstyled.OptionItem>
                        )
                    }) 
                }

                {
                    pathname.startsWith('/kartbody') &&
                    commonKartbodyDesc.map((item,index) => {
                        return (
                            <Selectstyled.OptionItem key={index}>
                                <Selectstyled.OptionTxt to={`/kartbody/${item.id}`} onClick={handleKartClick}>{item.title}</Selectstyled.OptionTxt>
                            </Selectstyled.OptionItem>
                        )
                    }) 
                }
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;