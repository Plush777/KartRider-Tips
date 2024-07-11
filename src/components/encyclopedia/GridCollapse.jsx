import * as G from "style/components/sub/encyclopedia/Grid.style";
import * as Collap from "style/components/sub/encyclopedia/Collapse.style";
import { statArray } from "data/karts";
import Graph from "components/encyclopedia/Graph";
import React, { Fragment } from "react";
import { acquisitionCondition } from "data/acquisition";

export default function GridCollapse({ kartItem, kartItemIndex, collapseRef }) {

    const acqArray = acquisitionCondition(kartItem.name);

    return (
        <Collap.Wrap ref={(el) => collapseRef.current[kartItemIndex] = el}>
            <Collap.List> 
                <Collap.Item className="first"> 
                    <Collap.Row flexDirection="column" rowGap="5px">
                        <G.Text as="span">획득경로</G.Text>
                        {acqArray.map((acqItem, acqIndex) => {
                            return (    
                                <G.Text fontSize=".875rem" as="span" key={acqIndex}>{acqItem}</G.Text>
                            )
                        })}
                    </Collap.Row>
                </Collap.Item>

                {kartItem.stat && kartItem.stat.array.map((stat, statIndex) => {
                    return (
                        <Collap.Item key={statIndex}> 
                            <Collap.Row rowGap="5px" flexDirection="column" columnGap="20px">
                                <Collap.Row columnGap="10px">
                                    <G.Text fontSize=".875rem">{statArray[statIndex]}</G.Text>
                                    <G.Text as="span" color="var(--active)" fontSize=".875rem" fontWeight="600">{stat}</G.Text>
                                </Collap.Row>
                                <Collap.Row columnGap="5px">
                                    {Array.from({ length: stat }, (_, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <Graph/>
                                            </Fragment>
                                        )
                                    })}
                                </Collap.Row>
                            </Collap.Row>
                        </Collap.Item>
                    )
                })}
            </Collap.List>
        </Collap.Wrap>
    )
}