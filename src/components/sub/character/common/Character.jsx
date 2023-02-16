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

                    <div className="cardWrap">
                        <Cardstyled.CardList>
                            
                        </Cardstyled.CardList>
                    </div>
                </Substyled.Inner>
            </Substyled.Wrap>
            <BtnTop/>
        </>
    );
}

export default Character;