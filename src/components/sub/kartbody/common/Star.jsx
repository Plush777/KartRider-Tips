import * as Substyled from 'components/style/components/sub/Star.style';
import { useState } from 'react';

const Star = (props) => {

    let [starData] = useState(props.commonContents.kartDescDepth);
    starData = starData.find(x => x.id === props.starParam);

    return ( 
        <Substyled.StarWrap>
            <Substyled.StarArea width="100%" zIndex="10" left="-2px">
                <Substyled.StarBox bgUrl="url('/images/common/img-star-outline.webp')"></Substyled.StarBox>
            </Substyled.StarArea>
            
            <Substyled.StarArea width={starData.star * 10 + "%"} zIndex="20" overflow="hidden">
                <Substyled.StarBox bgUrl="url('/images/common/img-star-fill.webp')"></Substyled.StarBox>
            </Substyled.StarArea>
        </Substyled.StarWrap>
    );
}

export default Star;