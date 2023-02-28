import * as Selectstyled from 'components/style/common/Select.style';
import { useLayoutEffect, useState } from 'react';
import { ReactComponent as SCarrowDown } from 'static/svg/ico-select-arrow-down.svg';
import { useDispatch,useSelector } from 'react-redux';
import { setRouterScroll } from 'redux/store/store';
import { setAriaBoolean } from 'redux/store/store';

const Select = props => {

    let [toggle,setToggle] = useState(false);
    let [selected,setSelected] = useState(null);
    let getSelectedValue = localStorage.getItem('selected');
    let dispatch = useDispatch();
    let ariaSelected = useSelector(state => state.ariaBoolean);

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
                {props.commonContents.kartDesc.map((item, index) => {
                    return(
                        <Selectstyled.OptionItem key={index}>
                            <Selectstyled.OptionTxt 
                            to={`/kartbody/common/${item.id}`} 
                            onClick={handleClick}
                            data-id={item.id}
                            aria-selected={ariaSelected}>
                                {item.title}
                            </Selectstyled.OptionTxt>
                        </Selectstyled.OptionItem>
                    )
                })}
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;