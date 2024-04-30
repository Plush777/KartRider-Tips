'use client';

import * as Selectstyled from 'components/style/common/Select.style';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import { useDispatch } from 'react-redux';
import { setSelectIndex } from 'redux/store/store';
import useSelect from 'hooks/useSelect';
import useClickOutside from "hooks/useClickOutside";
import { channels, sites, siteLinks } from 'data/select';
import { useEffect, useState } from 'react';

const Select = ({ selectKey, setSelectKey, width, height, data }) => {
    const [toggle, setToggle, handleSelectClick, handleToggleSelect] = useSelect();
    let dispatch = useDispatch();
    let [randomChannelIndex, setRandomChannelIndex] = useState(undefined);

    const selectClose = () => {
        setToggle(false);
    }

    const ref = useClickOutside(selectClose);

    const handleSelectChannel = (index) => {
        dispatch(setSelectIndex({
            channelIndex: index
        }));
    }

    const handleSelectKey = (index) => {
        let newKey;

        if(index === 0) newKey = 'UCJDEss5wA1ddrCBC40giO8A';
        if(index === 1) newKey = 'UCFBGBsvOMA2gbxmnxgotsmw';
        if(index === 2) newKey = 'UC8Y0MrXoV4eocUBOYzYnCaw';
        if(index === 3) newKey = 'UCkPYxlKG9pF2gIE2HohqaeA';

        setSelectKey(newKey);
    }

    const handleSelectPosTop = () => {
        if (data === 'sites') {
            return '-153px';
        } else if (data === 'channels') {
            return '40px';
        }
    }

    const renderSelectList = () => {
        if (data === 'sites') {
            return sites.map((siteItem, index) => {
                return (
                    <Selectstyled.OptionItem key={index}>
                        <Selectstyled.OptionText as="a" href={siteLinks[index]} target="_blank">
                            <span>{siteItem}</span>
                            <span className="hidden">새창열림</span>
                        </Selectstyled.OptionText>
                    </Selectstyled.OptionItem>
                )
            })
        } 
        
        else if (data === 'channels') {
            return channels.map((channelItem, index) => {
                return (
                    <Selectstyled.OptionItem key={index}>
                        <Selectstyled.OptionText as="button" type="button" onClick={(e) => {
                            handleSelectChannel(index);
                            handleSelectClick('channel', e);
                            handleSelectKey(index);
                        }}>
                            {channelItem}
                        </Selectstyled.OptionText>
                    </Selectstyled.OptionItem>
                )
            });
        }
    }

    useEffect(() => {
        if (selectKey === 'UCJDEss5wA1ddrCBC40giO8A') setRandomChannelIndex(0);
        else if (selectKey === 'UCFBGBsvOMA2gbxmnxgotsmw') setRandomChannelIndex(1);
        else if (selectKey === 'UC8Y0MrXoV4eocUBOYzYnCaw') setRandomChannelIndex(2);
        else if (selectKey === 'UCkPYxlKG9pF2gIE2HohqaeA') setRandomChannelIndex(3);
    },[selectKey]);

    const renderSelectText = () => {
        if (data === 'sites') {
            return '관련 사이트';
        } else if (data === 'channels') {
            return channels[randomChannelIndex];
        }
    }

    return ( 
        <Selectstyled.SelectArea ref={ref} width={width}>
            <Selectstyled.Select width={width} height={height} onClick={handleToggleSelect} aria-expanded={toggle}>
                <Selectstyled.SelectTxt>
                    {renderSelectText()}
                </Selectstyled.SelectTxt>
                <SCarrowDown width="24px" height="24px"/>
            </Selectstyled.Select>
            
            <Selectstyled.OptionList className="scY" top={handleSelectPosTop()} maxHeight="150px" show={toggle}>
               {renderSelectList()}
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select