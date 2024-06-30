import * as T from "style/common/Tab.style";

export default function Tab ({ 
    type, 
    data, 
    tabIndex, 
    setTabIndex, 
    marginBottom, 
    disabledIndex,
    styleProps
}) {
    const handleTab = (index) => {
        if (disabledIndex < index) {
            alert('아직 전설등급이 출시되지 않았습니다.');
            return;
        };
        setTabIndex(index);
    }

    return(
        <T.TabWrap className={type} marginBottom={marginBottom} styleProps={styleProps}>
            <T.TabList>
                {
                    data.map((tab, index) => (
                        <T.TabItem className={disabledIndex < index ? 'disabled' : ''} key={index}>
                            <T.TabDiv 
                                as='button' 
                                type='button' 
                                className={`${tabIndex === index ? 'active' : ''} `}
                                onClick={() => handleTab(index)}
                            >
                                {tab}
                            </T.TabDiv>
                        </T.TabItem>
                        
                    ))
                }
            </T.TabList>
        </T.TabWrap>
    )
}