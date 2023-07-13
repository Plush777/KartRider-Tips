'use client';

import * as Selectstyled from 'components/style/common/Select.style';
import { usePathname } from "next/navigation";
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectIndex , setCardRotate } from 'redux/store/store';
import { useSelect } from 'hooks/useSelect';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Select = () => {

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

    const handleSelectKart = index => {
        dispatch(setSelectIndex({
            kartIndex: index,
            characterIndex: 0,
            langIndex: 0
        }));
    }

    const handleSelectCharacter = index => {
        dispatch(setSelectIndex({
            kartIndex: 0,
            characterIndex: index,
            langIndex: 0
        }));
        dispatch(setCardRotate(null));
    }

    return ( 
        <Selectstyled.SelectArea type01="true">
            <Selectstyled.Select type01="true" onClick={handleToggleSelect} aria-expanded={toggle}>
                {pathname.startsWith('/karts') &&
                    <Selectstyled.SelectTxt type01="true">{t(`kartName.group${kartbodyPageId}.name`)}</Selectstyled.SelectTxt> 
                }

                {pathname.startsWith('/character') && 
                    <Selectstyled.SelectTxt type01="true">{t(`card.group${selectIndex.characterIndex+1}.name`)}</Selectstyled.SelectTxt>
                }
                <SCarrowDown width="20px" height="20px" fill="#333"/>
            </Selectstyled.Select>
            <Selectstyled.OptionList type01="true" className="scY" top="40px" maxHeight="150px" show={toggle}>
                {
                    pathname.startsWith('/character') &&
                    Object.keys(commonCharacterName).map((item,index) => {

                        return (
                            <Selectstyled.OptionItem key={index}>
                                <Selectstyled.OptionTxt type01="true" as="span" onClick={(e) => {
                                    handleSelectClick('character', e)
                                    handleSelectCharacter(index)
                                }}>{t(`card.group${index+1}.name`)}</Selectstyled.OptionTxt>
                            </Selectstyled.OptionItem>
                        )
                    }) 
                }

                {
                    pathname.startsWith('/karts') &&
                    Object.keys(commonKartbodyDesc).map((item,index) => {

                        const kartId = commonKartbodyDesc[item].id;

                        return (
                            <Selectstyled.OptionItem key={index}>
                                <Selectstyled.OptionTxt type01="true" onClick={(e) => {
                                    handleSelectClick('kart', e)
                                    handleSelectKart(index)
                                }}>
                                    <Link href={`/karts/${kartId}`}>{t(`kartName.group${index+1}.name`)}</Link>
                                </Selectstyled.OptionTxt>
                            </Selectstyled.OptionItem>
                        )
                    }) 
                }
            </Selectstyled.OptionList>
        </Selectstyled.SelectArea>
    );
}

export default Select;