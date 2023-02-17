import parse from 'html-react-parser';
import BtnTop from 'components/article/BtnTop';
import * as Substyled from 'components/style/common/Area.style';
import * as Cardstyled from 'components/style/components/sub/Card.style';

const Character = props => {
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
                            {props.characterCommonContents.frontCard.map((items,index) => {
                                return(
                                    <Cardstyled.CardItemBox key={index}>
                                        <Cardstyled.Card data-name={items.engName}>
                                            <Cardstyled.CardItem>
                                                <Cardstyled.CardInner>
                                                    <Cardstyled.NameBox>
                                                        <Cardstyled.Name ko>{items.name}</Cardstyled.Name>
                                                        <Cardstyled.Name as="span">{items.engName}</Cardstyled.Name>
                                                    </Cardstyled.NameBox>
                                                </Cardstyled.CardInner>
                                            </Cardstyled.CardItem>
                                        </Cardstyled.Card>
                                    </Cardstyled.CardItemBox>
                                )
                            })}

                            {/* {props.characterCommonContents.backCard.map((items,index) => {
                                return(
                                    <Cardstyled.Card data-name={items.engName} key={index}>
                                        <Cardstyled.CardItem back>
                                            <Cardstyled.CardInner>
                                                <Cardstyled.NameBox>
                                                    <Cardstyled.Name as="h5" ko>뒷면</Cardstyled.Name>
                                                    <Cardstyled.Name as="span">{items.engName}</Cardstyled.Name>
                                                </Cardstyled.NameBox>
                                            </Cardstyled.CardInner>
                                        </Cardstyled.CardItem>
                                    </Cardstyled.Card>
                                )
                            })} */}
                        </Cardstyled.CardList>
                    </Cardstyled.CardWrap>
                </Substyled.Inner>
            </Substyled.Wrap>
            <BtnTop/>
        </>
    );
}

export default Character;