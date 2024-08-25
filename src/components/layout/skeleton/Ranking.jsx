import * as Sk from 'style/layout/Skeleton.style';
import { styles } from 'const';

export default function Ranking() {
    const { styleType, imageSize } = styles.skeleton.ranking.propsObject;

    return (
        <Sk.Wrap>
            <Sk.RankBottomBar>
                <Sk.RankItem styleType={styleType.bottom}>
                    <Sk.RankInnerBox styleType={styleType.bottom} direction="column" seq>
                        <Sk.RankText styleType={styleType.bottom} styleProp="number"/>
                        <Sk.RankStatus />
                    </Sk.RankInnerBox>
                    <Sk.RankInnerBox direction="row" styleType={styleType.bottom}>
                        <Sk.RankImgBox width={imageSize.small.width} height={imageSize.small.height} />
                        <Sk.RankInnerBox styleType={styleType.bottom} direction="column">
                            <Sk.RankText styleType={styleType.bottom} styleProp="gameName" />
                            <Sk.RankInnerBox direction="row" type="gameDataContainer">
                                <Sk.RankInnerBox direction="row" type="gameData" />
                                <Sk.RankInnerBox direction="row" type="gameData" />
                            </Sk.RankInnerBox>
                        </Sk.RankInnerBox>
                    </Sk.RankInnerBox>
                </Sk.RankItem>
            </Sk.RankBottomBar>

            <Sk.RankList>
                {Array.from({ length: 4 }).map((_, index) => {
                    return (
                        <Sk.RankItem key={index}>
                            <Sk.RankInnerBox direction="column" seq>
                                <Sk.RankText styleType={styleType.list} styleProp="number"/>
                                <Sk.RankStatus />
                            </Sk.RankInnerBox>
                            <Sk.RankInnerBox direction="row">
                                <Sk.RankImgBox width={imageSize.wide.width} height={imageSize.wide.height} />

                                <Sk.RankInnerBox styleType={styleType.list} direction="column">
                                    <Sk.RankText styleType={styleType.list} styleProp="gameName" />
                                        <Sk.RankInnerBox direction="row" type="gameDataContainer">
                                            <Sk.RankInnerBox direction="row" type="gameData" />
                                            <Sk.RankInnerBox direction="row" type="gameData" />
                                        </Sk.RankInnerBox>
                                </Sk.RankInnerBox>
                            </Sk.RankInnerBox>
                        </Sk.RankItem>
                    )})
                }
            </Sk.RankList>
            
            <Sk.RankButtonWrap />
        </Sk.Wrap>
    )
}