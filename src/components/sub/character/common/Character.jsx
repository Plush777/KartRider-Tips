import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop';
import * as Substyled from 'components/style/common/Area.style';
import * as Cardstyled from 'components/style/components/sub/Card.style';
import { M768 } from 'components/style/mobile/MediaQuery';
import Select from 'components/mobile/Select';
import { useSelector } from 'react-redux';

const Character = props => {

    let commonCharacterName = useSelector(state => state.characterCommonName);

    return ( 
        <>
            <Substyled.Wrap>
                <Substyled.Inner>
                    {props.characterCommonContents.character.map((items,index) => {
                        return(
                            <div className="container" key={index}>
                                <Substyled.TitleArea bb pb>
                                    <Substyled.Title>{items.title}</Substyled.Title>
                                </Substyled.TitleArea>
                            </div>
                        )
                    })}

                    <Cardstyled.CardWrap>
                        <Cardstyled.CardList>
                            
                            {commonCharacterName.map((items,index) => {
                                return(
                                    <Cardstyled.CardItemBox key={index}>
                                        <Cardstyled.Card data-index={index}>
                                            <Cardstyled.CardItem> 
                                                <Cardstyled.CardInner>
                                                    <Cardstyled.NameBox>
                                                        <Cardstyled.Name ko>{items.name}</Cardstyled.Name>
                                                        <Cardstyled.Name as="span">{items.engName}</Cardstyled.Name>
                                                    </Cardstyled.NameBox>
                                                </Cardstyled.CardInner>
                                            </Cardstyled.CardItem>
                                        </Cardstyled.Card>

                                        <Cardstyled.Card data-index={index} key={index}>
                                            <Cardstyled.CardItem back>
                                                <Cardstyled.CardInner>
                                                    <Cardstyled.DescBox>
                                                        <Cardstyled.Desc as="h5" ko>{items.acq}</Cardstyled.Desc>
                                                        <Cardstyled.Desc lineHeight>{parse(items.desc)}</Cardstyled.Desc>
                                                        <Cardstyled.Desc bold quote lineHeight>{parse(items.speech)}</Cardstyled.Desc>
                                                    </Cardstyled.DescBox>
                                                </Cardstyled.CardInner>
                                            </Cardstyled.CardItem>
                                        </Cardstyled.Card>
                                    </Cardstyled.CardItemBox>
                                )
                            })}

                            <M768>
                                <Select/>
                            </M768>
                        </Cardstyled.CardList>
                    </Cardstyled.CardWrap>
                </Substyled.Inner>
            </Substyled.Wrap>
            <BtnTop/>
        </>
    );
}

export default Character;