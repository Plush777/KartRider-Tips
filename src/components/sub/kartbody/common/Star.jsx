import * as Substyled from '../../../style/Sub.style';

const Star = (props) => {

    return ( 
        <Substyled.StarWrap>
            <Substyled.StarArea width="100%" zIndex="10" left="-3px">
                <Substyled.StarBox bgUrl="url('/images/common/img-star-outline.webp')"></Substyled.StarBox>
            </Substyled.StarArea>
            {props.commonContents.kartDescDepth.map((items,index) => {
                return(
                    <Substyled.StarArea width={items.star * 10 + "%"} zIndex="20" overflow="hidden" key={index}>
                        <Substyled.StarBox bgUrl="url('/images/common/img-star-fill.webp')"></Substyled.StarBox>
                    </Substyled.StarArea>
                )
            })}
        </Substyled.StarWrap>
    );
}

export default Star;