import * as G from "style/components/sub/Grid.style";
import { useState, useEffect, useRef } from "react";
import VideoState from 'components/state/VideoState';
import GridItem from "components/encyclopedia/GridItem";
import GridCollapse from "components/encyclopedia/GridCollapse"

export default function Grid({ data, kartGradeData, isLoading, isError, tabIndex }) {
    const [toggleArray, setToggleArray] = useState([]);
    const collapseRef = useRef([]);

    function filterDataByGrade (grade) {
        return data && data.map((dataItem, dataIndex) => {
            return dataItem.name.map((name, nameIndex) => ({
                name,
                type: data[dataIndex].type?.[nameIndex],
                img: data[dataIndex].imgs?.[nameIndex],
                stat: data[dataIndex].stats?.[nameIndex]
            })).filter((item) => item.name?.includes(`[${grade}]`) ? item.name : false);
        });
    }

    const karts = filterDataByGrade(kartGradeData);

    useEffect(() => {
        if (data) {
            const initArray = Array.from({ length: data.length }, () => false);
            setToggleArray(initArray);
        }
    }, [tabIndex]);

    return(
        <G.Wrap>
            <G.List>
                <VideoState type='loading' styleClassName='ency'/>
                {isError && <VideoState type='error'/>}
                {isLoading ? 
                    <VideoState type='loading'/>
                    :
                    <>
                        {karts?.map((kart, kartIndex) => {
                            return kart.map((kartItem, kartItemIndex) => {
                                const kartName = kartItem.name.replace(`[${kartGradeData}]`, "").trim();
                                const uniqueIndex = kartIndex * 100 + kartItemIndex;
                                const toggle = toggleArray[uniqueIndex];

                                return (
                                    <G.Item key={uniqueIndex}>
                                       <GridItem
                                            kartItem={kartItem}
                                            kartName={kartName}
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
                    </>
                }
            </G.List>
        </G.Wrap>
    )
}