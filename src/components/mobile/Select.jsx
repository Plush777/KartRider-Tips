'use client';

import * as Selectstyled from 'components/style/common/Select.style';
import { usePathname } from "next/navigation";
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectIndex } from 'redux/store/store';
import { useSelect } from 'hooks/useSelect';
import { useTranslation } from 'react-i18next';
import useRssYoutube from 'hooks/useRssYoutube';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Select = ({ setCardRotateState, width, height, padding, border, radius, color, fontSize, marginTop, marginBottom, type }) => {

    let commonKartbodyDesc = useSelector(state => state.kartbodyCommon);
    let commonCharacterName = useSelector(state => state.characterCommonName);
    let selectIndex = useSelector(state => state.selectIndex);
    const [selected, toggle, handleSelectClick, handleToggleSelect] = useSelect();
    let dispatch = useDispatch();
    const pathname = usePathname();
    const { t } = useTranslation();

    const urlParts = pathname.split('/');
    const urlLastIndex = urlParts.length - 1;
    const kartbodyPageId = parseInt(urlParts[urlLastIndex]);

    const channels = ['리버스','정너굴','카트라이더: 드리프트'];
    const { getChannel } = useRssYoutube();

    const router = useRouter();

    const handleSelectKart = index => {
        dispatch(setSelectIndex({
            kartIndex: index,
            characterIndex: 0,
            langIndex: 0,
            channelIndex: 0
        }));
    }

    const handleSelectCharacter = index => {
        dispatch(setSelectIndex({
            kartIndex: 0,
            characterIndex: index,
            langIndex: 0,
            channelIndex: 0
        }));
        setCardRotateState(null);
    }

    const handleSelectChannel = index => {
        dispatch(setSelectIndex({
            kartIndex: 0,
            characterIndex: 0,
            langIndex: 0,
            channelIndex: index
        }));
    }

    const selectTxtCondition = () => {
        if (getChannel ===  'UCFBGBsvOMA2gbxmnxgotsmw') return '리버스';
        if (getChannel ===  'UC8Y0MrXoV4eocUBOYzYnCaw') return '정너굴';
        if (getChannel ===  'UCkPYxlKG9pF2gIE2HohqaeA') return '카트라이더: 드리프트';
    }

    const handleSelectTxtRendering = () => {
        if (pathname.startsWith('/karts')) return <Selectstyled.SelectTxt color={color} fontSize={fontSize}>{t(`kartName.group${kartbodyPageId}.name`)}</Selectstyled.SelectTxt> 
        if (pathname.startsWith('/character')) return <Selectstyled.SelectTxt color={color} fontSize={fontSize}>{t(`card.group${selectIndex.characterIndex+1}.name`)}</Selectstyled.SelectTxt>
        if (pathname.startsWith('/main')) return <Selectstyled.SelectTxt color={color} fontSize={fontSize}>{getChannel ? selectTxtCondition() : channels[selectIndex.channelIndex]}</Selectstyled.SelectTxt>

        return null;
    }

    const handleRssId = (index) => {
        if(index === 0) return localStorage.setItem('channel','UCFBGBsvOMA2gbxmnxgotsmw');
        if(index === 1) return localStorage.setItem('channel','UC8Y0MrXoV4eocUBOYzYnCaw');
        if(index === 2) return localStorage.setItem('channel','UCkPYxlKG9pF2gIE2HohqaeA');
    }

    const handleRouter = () => {
        router.push(`/main/${getChannel}`,undefined,{scroll:false});
    }

    const handleOptionItemRendering = (index, dataParam, callback, href, text, state, handler, ignore) => {
        return (
            <Selectstyled.OptionItem key={index}>
                <Selectstyled.OptionTxt color={color} fontSize={fontSize} onClick={(e) => {
                    handleSelectClick(dataParam, e);
                    callback(index);
                    handler === 'true' ? handleRssId(index) : '';
                    handleRouter();
                }}>
                    <Link onClick={ignore === 'true' ? (e) => e.preventDefault() : ''} href={href} 
                    role={state === 'presentation' ? 'button' : ''}>{text}</Link>
                </Selectstyled.OptionTxt>
            </Selectstyled.OptionItem>
        )
    }

    const handleOptionItemCondition = () => {
        if(pathname.startsWith('/character')){
            return Object.keys(commonCharacterName).map((item,index) => {
                return handleOptionItemRendering(index, 'character',handleSelectCharacter,'#!',t(`card.group${index+1}.name`),'presentation','false','true');
            })
        }

        if(pathname.startsWith('/karts')){
            return Object.keys(commonKartbodyDesc).map((item,index) => {
                const kartId = commonKartbodyDesc[item].id;

                return handleOptionItemRendering(index, 'kart',handleSelectKart,`/karts/${kartId}`,t(`kartName.group${index+1}.name`),'none','false','false');
            })
        }

        if(pathname.startsWith('/main')){
            return channels.map((item,index) => {
                return handleOptionItemRendering(index, 'channel',handleSelectChannel,'#!',item,'presentation','true','true');
            })
        }

        return null;
    }

    return ( 
        <Selectstyled.SelectArea type={type} width={width} marginTop={marginTop} marginBottom={marginBottom}>
            <Selectstyled.Select width={width} height={height} padding={padding} border={border} 
            radius={radius} onClick={handleToggleSelect} aria-expanded={toggle}>
                {handleSelectTxtRendering()}
                <SCarrowDown width="20px" height="20px" fill="#333"/>
            </Selectstyled.Select>
            <Selectstyled.OptionList border={border} radius={radius} className="scY" 
            top="40px" maxHeight="150px" show={toggle}>
                {handleOptionItemCondition()}
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;