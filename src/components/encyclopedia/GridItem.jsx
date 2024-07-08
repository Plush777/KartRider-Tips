import * as G from "style/components/sub/encyclopedia/Grid.style";
import Image from "next/image";
import { backgroundCondition } from "data/karts";
import SCMinus from 'svg/ico-collapse-minus.svg';
import SCPlus from 'svg/ico-collapse-plus.svg';
import { useState } from "react";

export default function GridItem({ 
    kartItem, 
    toggle, 
    uniqueIndex, 
    toggleArray, 
    setToggleArray, 
    collapseRef 
}) {

    const [loaded, setLoaded] = useState(false);

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

    const loadingComplete = () => {
        setLoaded(true);
    }

    return (
        <G.InnerItem className={`${loaded ? 'loaded' : ''}`}>
            <G.ImgDiv>
                <G.Tag className={`gridTag ${backgroundCondition(kartItem.type)}`}>{kartItem.type}</G.Tag>
                
                <Image 
                    className="gridImage"
                    onLoadingComplete={loadingComplete}
                    src={kartItem.img} 
                    width={240} 
                    height={200} 
                    alt={kartItem.name}
                />
            </G.ImgDiv>
            <G.Box>
                <G.InnerBox>
                    <G.Button className="gridButton" type="button" onClick={() => handleToggle(uniqueIndex)}>
                        <G.Text>{kartItem.name}</G.Text>

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