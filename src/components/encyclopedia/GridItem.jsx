import * as G from "style/components/sub/Grid.style";
import Image from "next/image";
import { backgroundCondition } from "data/karts";
import SCMinus from 'svg/ico-collapse-minus.svg';
import SCPlus from 'svg/ico-collapse-plus.svg';

export default function GridItem({ 
    kartItem, 
    kartName, 
    toggle, 
    uniqueIndex, 
    toggleArray, 
    setToggleArray, 
    collapseRef 
}) {

    const handleToggle = (index) => {
        const updatedArray = [...toggleArray];
        updatedArray[index] = !updatedArray[index];
        setToggleArray(updatedArray);

        if (updatedArray[index]) {
            /* setTimeout으로 비동기처리 */
            setTimeout(() => {
                if (collapseRef.current[index]) {
                    collapseRef.current[index].scrollIntoView({ behavior: "smooth", block: "center"});
                }
            }, 1);
        }
    }

    return (
        <G.InnerItem>
            <G.ImgDiv>
                <G.Tag className={backgroundCondition(kartItem.type)}>{kartItem.type}</G.Tag>
                <Image priority="high" src={kartItem.img} width={240} height={200} alt={kartName}/>
            </G.ImgDiv>
            <G.Box>
                <G.InnerBox>
                    <G.Button type="button" onClick={() => handleToggle(uniqueIndex)}>
                        <G.Text>{kartName}</G.Text>

                        {
                            toggle ? 
                            <SCMinus width="16px" height="16px" stroke="var(--title)" /> 
                            : 
                            <SCPlus width="16px" height="16px" stroke="var(--title)" />
                        }
                    </G.Button>
                </G.InnerBox>
                
            </G.Box>
        </G.InnerItem>
    )
}