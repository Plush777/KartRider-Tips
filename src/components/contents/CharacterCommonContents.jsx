'use client';

import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop';
import * as Substyled from 'components/style/common/Area.style';
import * as Cardstyled from 'components/style/components/sub/Card.style';
import { M768 , Min768 } from 'components/style/mobile/MediaQuery';
import Select from 'components/mobile/Select';
import { useSelector , useDispatch } from 'react-redux';
import * as Buttonstyled from "components/style/common/Button.style";
import { setCardRotate } from 'redux/store/store';
import ClipBoardAlert from 'components/article/ClipBoardAlert';
import BtnClipBoard from 'components/article/BtnClipBoard';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect, useState } from 'react';
import etc from 'locales/ko/etc/etc.json';

const CharacterCommonContents = ({ characterCommon }) => {

    let commonCharacterName = useSelector(state => state.characterCommonName);
    let selectIndex = useSelector(state => state.selectIndex);
    let cardRotate = useSelector(state => state.cardRotate);
    let clipBoardDisplay = useSelector(state => state.toggle.clipBoard);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const language = useSelector(state => state.language);

    const onRotate = () => {
        cardRotate === null ? dispatch(setCardRotate('rotate')) : dispatch(setCardRotate(null));
    }

    return ( 
        <>
            <Min768>
                <ClipBoardAlert active={clipBoardDisplay && 'active'}/>
            </Min768>
            
            <Substyled.Wrap>
                <Substyled.Inner>
                    {Object.keys(characterCommon.characterTitle).map((items,index) => {
                        return(
                            <div className="container" key={index}>
                                <Substyled.TitleArea bb pb>
                                    <Substyled.Title>{t(`characterTitle.group${index+1}.title`)}</Substyled.Title>
                                </Substyled.TitleArea>
                            </div>
                        )
                    })}

                    <Cardstyled.CardWrap>

                        {/* 모바일 카드 */}
                        <M768>
                            <Select/>

                            <Cardstyled.CardList>
                                <Cardstyled.CardItemBox className={cardRotate}>
                                    <Cardstyled.Card data-index={selectIndex.characterIndex}>
                                        <Cardstyled.CardItem> 
                                            <Cardstyled.CardInner>
                                                <Cardstyled.NameBox>
                                                    <Cardstyled.Name ko>{t(`card.group${[selectIndex.characterIndex+1]}.name`)}</Cardstyled.Name>
                                                    <Cardstyled.Name as="span">{t(`card.group${[selectIndex.characterIndex+1]}.engName`)}</Cardstyled.Name>
                                                </Cardstyled.NameBox>
                                            </Cardstyled.CardInner>
                                        </Cardstyled.CardItem>
                                    </Cardstyled.Card>

                                    <Cardstyled.Card data-index={selectIndex.characterIndex}>
                                        <Cardstyled.CardItem back>
                                            <Cardstyled.CardInner>
                                                <Cardstyled.DescBox>
                                                    <Cardstyled.Desc as="h5" ko>{t(`card.group${[selectIndex.characterIndex+1]}.acq`)}</Cardstyled.Desc>
                                                    <Cardstyled.Desc lineHeight>{parse(t(`card.group${[selectIndex.characterIndex+1]}.desc`))}</Cardstyled.Desc>
                                                    <Cardstyled.Desc bold quote lineHeight>{parse(t(`card.group${[selectIndex.characterIndex+1]}.speech`))}</Cardstyled.Desc>
                                                </Cardstyled.DescBox>
                                            </Cardstyled.CardInner>
                                        </Cardstyled.CardItem>
                                    </Cardstyled.Card>
                                </Cardstyled.CardItemBox>
                            </Cardstyled.CardList>

                            <Buttonstyled.BtnArea>
                                <Buttonstyled.Btn radius="4px" color="#fff" fontSize="0.875rem" 
                                border="none" height="44px" padding="0 19.67px" background="#333"
                                onClick={onRotate}>{t(`rotate.txt`)}</Buttonstyled.Btn>
                            </Buttonstyled.BtnArea>
                        </M768>

                        {/* pc 카드 */}
                        <Min768>
                            <Cardstyled.CardList>
                                {Object.keys(commonCharacterName).map((items,index) => {
                                    return(
                                        <Cardstyled.CardItemBox key={index}>
                                            <Cardstyled.Card data-index={index}>
                                                <Cardstyled.CardItem> 
                                                    <Cardstyled.CardInner>
                                                        <Cardstyled.NameBox>
                                                            <Cardstyled.Name ko>{t(`card.group${index+1}.name`)}</Cardstyled.Name>
                                                            {language === 'en' ? null : <Cardstyled.Name as="span">{t(`card.group${index+1}.engName`)}</Cardstyled.Name>}
                                                        </Cardstyled.NameBox>
                                                    </Cardstyled.CardInner>
                                                </Cardstyled.CardItem>
                                            </Cardstyled.Card>

                                            <Cardstyled.Card data-index={index} key={index}>
                                                <Cardstyled.CardItem back>
                                                    <Cardstyled.CardInner>
                                                        <Cardstyled.DescBox>
                                                            <Cardstyled.Desc as="h5" ko>{t(`card.group${index+1}.acq`)}</Cardstyled.Desc>
                                                            <Cardstyled.Desc lineHeight>{parse(t(`card.group${index+1}.desc`))}</Cardstyled.Desc>
                                                            <Cardstyled.Desc bold quote lineHeight>{parse(t(`card.group${index+1}.speech`))}</Cardstyled.Desc>
                                                        </Cardstyled.DescBox>
                                                    </Cardstyled.CardInner>
                                                </Cardstyled.CardItem>
                                            </Cardstyled.Card>
                                        </Cardstyled.CardItemBox>
                                    )
                                })}
                            </Cardstyled.CardList>
                        </Min768>
                        
                    </Cardstyled.CardWrap>
                </Substyled.Inner>
            </Substyled.Wrap>

            <BtnClipBoard/>
            <BtnTop/>
        </>
    );
}

export default CharacterCommonContents;