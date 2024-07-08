import * as T from "style/common/Tab.style";
import TabIndicator from "./TabIndicator";
import { useEffect } from "react";
import useTabIndicator from "hooks/useTabIndicator";

export default function Tab ({ 
    type, 
    data, 
    tabIndex, 
    setTabIndex, 
    marginBottom, 
    disabledIndex,
    styleProps,
    clicked,
    setClicked,
    indicator
}) {

    const { indicatorState, tabRef, updateIndicator } = useTabIndicator();

    useEffect(() => {
        updateIndicator(tabIndex);
    }, [tabIndex]);
    
    useEffect(() => {
        updateIndicator(0); 
    }, []);
    
    const handleTabIndex = (index) => {
        if (disabledIndex < index) {
            alert('아직 전설등급이 출시되지 않았습니다.');
            return;
        };
        setTabIndex(index);
    }

    const handleClicked = (index) => {
        // 클릭한 탭의 인덱스를 저장
        let newClicked = clicked && clicked.map((_, i) => {
            if (i === index) {
                return true;
            } else {
                return false;
            }
        });

        setClicked(newClicked);
    }

    return(
        <T.TabWrap className={type} marginBottom={marginBottom} styleProps={styleProps}>
            <T.TabList ref={tabRef}>
                {
                    data.map((tab, index) => (
                        <T.TabItem className={disabledIndex < index ? 'disabled' : ''} key={index}>
                            <T.TabDiv 
                                as='button' 
                                type='button' 
                                className={`${tabIndex === index ? 'active' : ''} `}
                                onClick={() => {
                                    handleTabIndex(index);
                                    clicked && handleClicked(index);
                                }}
                            >
                                {tab}
                            </T.TabDiv>
                        </T.TabItem>
                        
                    ))
                }
            </T.TabList>
            {indicator && <TabIndicator width={indicatorState.width} left={indicatorState.left}/>}
        </T.TabWrap>
    )
}