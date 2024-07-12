import * as G from "style/components/sub/encyclopedia/Grid.style";
import { useState, useEffect, useRef } from "react";
import GridItem from "components/encyclopedia/GridItem";
import GridCollapse from "components/encyclopedia/GridCollapse";
import { filterDataByGrade } from "data/sidebar";

export default function Grid({ data, commonProps }) {
    const [dataState, setDataState] = useState(undefined);
    const [toggleArray, setToggleArray] = useState([]);
    const collapseRef = useRef([]);

    let karts = filterDataByGrade(commonProps.kartGradeData, data);

    useEffect(() => {
        if (data) {
            setDataState(karts);
            const initArray = Array.from({ length: karts.length }, () => false);
            setToggleArray(initArray);
        }

        if (data && commonProps.value.length > 0) {
            setDataState(data);
        }

        if (data && commonProps.value.length > 0 && commonProps.clicked?.includes(true)) {
            commonProps.setValue('');
            commonProps.setClicked([false, false, false, false, false]);
            setDataState(karts);
        }
    }, [data, commonProps.tabIndex, commonProps.kartGradeData, commonProps.value]);

    return (
        <G.Wrap>
             <G.List>
                {dataState?.map((kart, kartIndex) => {
                    return kart?.map((kartItem, kartItemIndex) => {
                        const uniqueIndex = kartIndex * 100 + kartItemIndex;
                        const toggle = toggleArray[uniqueIndex];

                        return (
                            <G.Item key={uniqueIndex}>
                                <GridItem
                                    kartItem={kartItem}
                                    toggle={toggle}
                                    uniqueIndex={uniqueIndex}
                                    toggleArray={toggleArray}
                                    setToggleArray={setToggleArray}
                                    collapseRef={collapseRef}
                                />

                                {
                                    toggle && 

                                    <GridCollapse 
                                        kartItem={kartItem} 
                                        kartItemIndex={uniqueIndex} 
                                        collapseRef={collapseRef}
                                    />
                                }
                                
                            </G.Item>
                        )
                    })
                })}
            </G.List>
        </G.Wrap>
    )
}