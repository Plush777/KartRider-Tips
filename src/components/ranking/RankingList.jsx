import SCrankArrowUp from 'svg/ico-rank-arrow-up.svg';
import SCrankArrowDown from 'svg/ico-rank-arrow-down.svg';
import Image from 'next/image';
import * as R from 'style/components/ranking/RankingList.style';
import { fetchGameImage } from 'scripts/api/ranking';

export default function RankingList ({ data, isLoading }) {
    const rankIconCondition = (data) => {
        if (data) {
            if (data.includes('ranking-static-up')) return <SCrankArrowUp width="12px" height="12px" fill="#eb0400"/>
            if (data.includes('ranking-static-down')) return <SCrankArrowDown width="12px" height="12px" fill="#0094ff"/>
            if (data.includes('new')) return 'new'
        }
    }

    const rankImgCondition = (conditionData, returnData) => {
        if (conditionData === '카트라이더 드리프트') {
            return '/images/common/img-kart-app.webp';
        } else {
            return returnData; 
        }
    }
  
    const myGameRank = data && data.filter((list) => list.title === '카트라이더 드리프트');

    return (
        <R.RankWrap>
            <R.BottomBar>
                {myGameRank?.map((list, index) => {
                    const { title, rank, rankChange, rankStatus } = list;
                    

                    console.log(fetchGameImage(title));

                    return(
                        <R.RankBoxItem key={index} as="div">
                            <R.RankInnerBox direction="column" seq>
                                <R.RankText className="number" as="strong">{rank}</R.RankText>
                                {
                                    rankChange === '' && rankStatus === '' ?
                                    null
                                    :
                                    <R.RankStatus>
                                        <R.RankText className="icon">{rankIconCondition(rankStatus)}</R.RankText>
                                        <R.RankText className="status">{rankChange}</R.RankText>
                                    </R.RankStatus>
                                }
                            </R.RankInnerBox>
                            <R.RankInnerBox direction="row">
                                <Image width={38} height={38} src={''} alt="카트라이더 드리프트"/>
                                <R.RankText as="h3" className="gameName">{title}</R.RankText>
                            </R.RankInnerBox>
                        </R.RankBoxItem>
                    )
                })}
            </R.BottomBar>
            <R.RankList>
                {data && data.map((list, index) => {
                    const { title, rank, rankChange, rankStatus } = list;

                    return(
                        <R.RankBoxItem key={index}>
                            <R.RankInnerBox direction="column" seq>
                                <R.RankText className="number" as="strong" data-number={index+1}>{rank}</R.RankText>
                                {
                                    rankChange === '' && rankStatus === '' ?
                                    null
                                    :
                                    <R.RankStatus>
                                        <R.RankText className="icon">{rankIconCondition(rankStatus)}</R.RankText>
                                        <R.RankText className="status">{rankChange}</R.RankText>
                                    </R.RankStatus>
                                }
                            </R.RankInnerBox>
                            <R.RankInnerBox direction="row">
                                <Image width={64} height={64} src={''} alt="카트라이더 드리프트"/>
                                <R.RankText as="h3" className="gameName">{title}</R.RankText>
                            </R.RankInnerBox>
                        </R.RankBoxItem>
                    )
                })}
            </R.RankList>
        </R.RankWrap>
    )
}