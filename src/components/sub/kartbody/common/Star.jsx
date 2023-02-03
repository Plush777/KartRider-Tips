import * as Substyled from '../../../style/Sub.style';

const Star = () => {
    return ( 
        <Substyled.StarWrap>
            <Substyled.StarArea width="100%" zIndex="10">
                <Substyled.StarBox bgUrl="url('/images/common/img-star-outline.webp')"></Substyled.StarBox>
            </Substyled.StarArea>
            <Substyled.StarArea width="20%" zIndex="20" overflow="hidden">
                <Substyled.StarBox bgUrl="url('/images/common/img-star-fill.webp')"></Substyled.StarBox>
            </Substyled.StarArea>
        </Substyled.StarWrap>
    );
}

export default Star;