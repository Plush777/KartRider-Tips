'use client';

import * as Diffstyled from 'components/style/components/sub/difficulty.style';

const Difficulty = ({ value = 0 }) => {
    return ( 
        <Diffstyled.DiffWrap>
            <Diffstyled.DiffArea width="100%" zIndex="10" left="0" top="11px">
                <Diffstyled.DiffBox bgUrl="url('/images/common/ico-difficulty-outline.svg')"></Diffstyled.DiffBox>
            </Diffstyled.DiffArea>
            
            <Diffstyled.DiffArea width={value * 10 + "%"} zIndex="20" overflow="hidden" top="11px">
                <Diffstyled.DiffBox bgUrl="url('/images/common/ico-difficulty-fill.svg')"></Diffstyled.DiffBox>
            </Diffstyled.DiffArea>
        </Diffstyled.DiffWrap>
    );
}

export default Difficulty;