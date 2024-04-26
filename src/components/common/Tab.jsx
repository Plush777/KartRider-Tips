"use client";

import * as Tabstyled from "components/style/common/Tab.style";

const Tab = ({ data, tabIndex, setTabIndex, marginBottom }) => {
    const handleTab = (index) => setTabIndex(index);

    return(
        <Tabstyled.TabWrap marginBottom={marginBottom}>
            <Tabstyled.TabList>
                {
                    data.map((tab, index) => (
                        <Tabstyled.TabItem key={index}>
                            <Tabstyled.TabDiv 
                                as='button' 
                                type='button' 
                                className={tabIndex === index ? 'active' : ''}
                                onClick={() => handleTab(index)}
                            >
                                {tab}
                            </Tabstyled.TabDiv>
                        </Tabstyled.TabItem>
                        
                    ))
                }
            </Tabstyled.TabList>
        </Tabstyled.TabWrap>
    )
}

export default Tab;