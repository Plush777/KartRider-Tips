import * as G from "style/components/sub/Grid.style";
import { statArray } from "data/karts";

export default function GridCollapse({ kartItem, kartItemIndex, collapseRef }) {
    return (
        <G.CollapseWrap ref={(el) => collapseRef.current[kartItemIndex] = el}>
            <G.CollapseList> 
                {kartItem.stat.array.map((stat, statIndex) => {
                    return (
                        <G.CollapseItem key={statIndex}> 
                            <G.Row rowGap="5px" flexDirection="column" columnGap="20px">
                                <G.Row columnGap="15px">
                                    <G.Text fontSize=".875rem">{statArray[statIndex]}</G.Text>
                                    <G.Text as="span" fontSize=".875rem">{stat}</G.Text>
                                </G.Row>
                                <G.Row columnGap="5px">
                                    {Array.from({ length: stat }, (_, index) => {
                                        return (
                                            <G.StatGraph key={index}/>
                                        )
                                    })}
                                </G.Row>
                            </G.Row>
                        </G.CollapseItem>
                    )
                })}
            </G.CollapseList>
        </G.CollapseWrap>
    )
}