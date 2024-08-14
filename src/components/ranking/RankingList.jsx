import SCrankArrowUp from 'svg/ico-rank-arrow-up.svg';
import SCrankArrowDown from 'svg/ico-rank-arrow-down.svg';
import SCrankMinus from 'svg/ico-rank-minus.svg';
import Image from 'next/image';
import * as R from 'style/components/ranking/RankingList.style';
import * as B from 'style/common/Button.style';

export default function RankingList ({ 
    ranking, 
    rankingFetchNextPage, 
    rankingHasNextPage, 
    rankingFetchingNextPage
}) {
    const rankIconCondition = (data) => {
        if (data) {
            if (data.includes('up')) return <SCrankArrowUp width="12px" height="12px" fill="#eb0400"/>
            if (data.includes('down')) return <SCrankArrowDown width="12px" height="12px" fill="#0094ff"/>
            if (data.includes('noChange')) return <SCrankMinus width="12px" height="12px" fill="var(--disabled)"/>
        }
    }

    const loopRankingData = ranking && ranking.pages[0].result;

    // console.log(loopRankingData);

    return (
        <R.RankWrap>
            {/* <R.BottomBar>
                {myGameRank?.map((list, index) => {
                    const { title, rank, gameRankUpDown, sharesStatus, shares } = list;
                    const { src, alt } = list.images;

                    return(
                        <R.RankBoxItem key={index} as="div">
                            <R.RankInnerBox direction="column" seq>
                                <R.RankText className="number" as="strong">{rank}</R.RankText>
                                {
                                    gameRankUpDown === '' && sharesStatus === '' ?
                                    null
                                    :
                                    <R.RankStatus>
                                        <R.RankText className="icon">{rankIconCondition(sharesStatus)}</R.RankText>
                                        <R.RankText className="status">{gameRankUpDown}</R.RankText>
                                    </R.RankStatus>
                                }
                            </R.RankInnerBox>
                            <R.RankInnerBox direction="row">
                                <Image width={38} height={38} src={src ? src : ''} alt={alt ? alt : ''}/>
                                <R.RankText as="h3" className="gameName">{title}</R.RankText>
                            </R.RankInnerBox>
                        </R.RankBoxItem>
                    )
                })}
            </R.BottomBar> */}
            <R.RankList>
                {loopRankingData.map((loopItem, loopIndex) => {
                    const { title, rank, gameRankUpDown, sharesStatus, shares, targetDate, useStoreCount, img } = loopItem;

                    return(
                        <R.RankBoxItem key={loopItem.rank}>
                            <R.RankInnerBox direction="column" seq>
                                <R.RankText className="number" as="strong">{rank}</R.RankText>
                                {
                                    gameRankUpDown === '' && sharesStatus === '' ?
                                    null
                                    :
                                    <R.RankStatus>
                                        <R.RankText className="icon">{rankIconCondition(sharesStatus)}</R.RankText>
                                        <R.RankText className="status">{gameRankUpDown}</R.RankText>
                                    </R.RankStatus>
                                }
                            </R.RankInnerBox>
                            <R.RankInnerBox direction="row">
                                <Image width={64} height={64} src={img == null ? '' : img} alt={`${title} 이미지`}/>
                                <R.RankText as="h3" className="gameName">{title}</R.RankText>
                            </R.RankInnerBox>
                        </R.RankBoxItem>
                    )})
                }
            </R.RankList>
            <R.RankButtonWrap>
                <B.Button 
                    type="button" 
                    typeProp="rank" 
                    disabled={rankingFetchingNextPage || !rankingHasNextPage ? true : false} 
                    onClick={rankingFetchNextPage}
                >
                    더보기
                </B.Button>
            </R.RankButtonWrap>
        </R.RankWrap>
    )
}