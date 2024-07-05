import * as G from "style/components/sub/encyclopedia/Grid.style";
import { useState, useEffect, useRef } from "react";
import GridItem from "components/encyclopedia/GridItem";
import GridCollapse from "components/encyclopedia/GridCollapse"
import { filterDataByGrade } from "data/sidebar";

export default function Grid({ 
    data, 
    kartGradeData, 
    tabIndex, 
    value, 
    setValue, 
    clicked,
    setClicked
}) {
    const [dataState, setDataState] = useState(undefined);
    const [toggleArray, setToggleArray] = useState([]);
    const collapseRef = useRef([]);

    let karts = filterDataByGrade(kartGradeData, data);

    useEffect(() => {
        if (data) {
            setDataState(karts);
            const initArray = Array.from({ length: karts.length }, () => false);
            setToggleArray(initArray);
        }

        if (data && value.length > 0) {
            setDataState(data);
        }

        if (data && value.length > 0 && clicked?.includes(true)) {
            setValue('');
            setClicked([false, false, false, false, false]);
            setDataState(karts);
        }
    }, [data, tabIndex, kartGradeData, value]);

    return(
        <G.Wrap>
            <G.List>
                {/* <VideoState type='loading' styleClassName='ency'/> */}
                {/* {isError && <VideoState type='error'/>} */}
                {/* {isLoading ? 
                    <VideoState type='loading'/>
                    :
                   
                } */}
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
                                        kartName={kartName}
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