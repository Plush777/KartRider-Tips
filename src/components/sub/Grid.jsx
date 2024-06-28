import * as G from "style/components/sub/Grid.style";
import Image from "next/image";
import { backgroundCondition } from "data/karts";

export default function Grid({ data, kartGradeData, isLoading, isError }) {
    function filterDataByGrade (grade) {
        return data && data.map((dataItem, dataIndex) => {
            return dataItem.name.map((name, nameIndex) => ({
                name,
                type: data[dataIndex].type?.[nameIndex],
                img: data[dataIndex].imgs?.[nameIndex]
            })).filter((item) => item.name?.includes(`[${grade}]`) ? item.name : false);
        });
    }

    const karts = filterDataByGrade(kartGradeData);

    return(
        <G.Wrap>
            <G.List>
                {isLoading ? <p>loading...</p>
                :
                    <>
                        {karts?.map((kart) => {
                            return kart.map((item, itemIndex) => {
                                return (
                                    <G.Item key={itemIndex}>
                                        <G.InnerItem>
                                            <G.ImgDiv>
                                                <G.Tag className={backgroundCondition(item.type)}>{item.type}</G.Tag>
                                                <Image priority="high" src={item.img} width={240} height={200} alt={item.name}/>
                                            </G.ImgDiv>
                                            <G.NameArea>
                                                <G.Name>{item.name.replace(`[${kartGradeData}]`, "").trim()}</G.Name>
                                            </G.NameArea>
                                        </G.InnerItem>
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