'use client';

import SCaccordionArrow from 'svg/ico-accordion-arrow.svg';
import * as Substyled from 'components/style/common/Area.style';
import { useState } from 'react';

const Accordion = ({ accordionContent, title }) => {

    const [isActive, setIsActive] = useState(false);

    return ( 
        <Substyled.AccordionArea>
            <Substyled.AccordionGroup>
                <Substyled.AccordionButton onClick={() => setIsActive(!isActive)} aria-expanded={isActive}>
                    {title}
                    <SCaccordionArrow width="24px" height="24px" fill="#000" className={isActive ? 'on' : null}/>
                </Substyled.AccordionButton>

                {isActive && accordionContent}
            </Substyled.AccordionGroup>
        </Substyled.AccordionArea>
     );
}

export default Accordion;