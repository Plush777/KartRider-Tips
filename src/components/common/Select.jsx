import * as Selectstyled from 'style/common/Select.style';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import useSelect from 'hooks/useSelect';
import useClickOutside from "hooks/useClickOutside";
import { channels, sites } from 'data/select';
import { useEffect, useState } from 'react';
import { youtubeId } from 'const';

export default function Select ({ width, height, selectKey, setSelectKey, data }) {
    const [toggle, setToggle, handleSelectClick, handleToggleSelect] = useSelect();
    let [randomChannelIndex, setRandomChannelIndex] = useState(undefined);

    const selectClose = () => {
        setToggle(false);
    }

    const ref = useClickOutside(selectClose);

    const handleSelectKey = (index) => {
        let newKey;

        if(index === 0) newKey = youtubeId.형독방송;
        if(index === 1) newKey = youtubeId.리버스;
        if(index === 2) newKey = youtubeId.정너굴;
        if(index === 3) newKey = youtubeId.카트라이더드리프트;

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
                        <Selectstyled.OptionText as="a" href={siteItem.link} target="_blank">
                            <span>{siteItem.name}</span>
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
        if (selectKey === youtubeId.형독방송) setRandomChannelIndex(0);
        else if (selectKey === youtubeId.리버스) setRandomChannelIndex(1);
        else if (selectKey === youtubeId.정너굴) setRandomChannelIndex(2);
        else if (selectKey === youtubeId.카트라이더드리프트) setRandomChannelIndex(3);
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