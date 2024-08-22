import * as R from 'style/components/ranking/RankingList.style';
import * as B from 'style/common/Button.style';
import RankingBoxItem from 'components/ranking/RankingBoxItem';
import { publicImageSrc } from 'const';

export default function RankingList ({ 
    ranking, 
    rankingFetchNextPage, 
    rankingHasNextPage, 
    rankingFetchingNextPage,
    images,
    imagesFetchNextPage,
    imagesIsError
}) {

    const styles = {
        list: {
            styleType: 'list'
        },
        bottom: {
            styleType: 'bottom'
        }
    }

    return (
        <R.RankWrap>
            <R.BottomBar>
                {ranking && ranking.pages.map((page, pageIndex) => {
                    const myGameRank = page.result?.filter((result) => result.title === '카트라이더 드리프트');

                    return myGameRank?.map((result, resultIndex) => {
                        const { title, rank, gameRankUpDown, sharesStatus, shares, targetDate, useStoreCount } = result;

                        return (
                            <RankingBoxItem 
                                key={rank} 
                                styleType={styles.bottom.styleType}
                                title={title} 
                                rank={rank} 
                                gameRankUpDown={gameRankUpDown} 
                                sharesStatus={sharesStatus} 
                                shares={shares} 
                                targetDate={targetDate} 
                                useStoreCount={useStoreCount} 
                                img={publicImageSrc.static.kartApp} 
                                tagAs="div" 
                                imageWidth={50} 
                                imageHeight={50}
                                imagesIsError={imagesIsError}
                            />
                        )
                    })
                })}
            </R.BottomBar>
            <R.RankList>
                {ranking && ranking.pages.map((page, pageIndex) => {
                    return page.result?.map((result, resultIndex) => {
                        const { title, rank, gameRankUpDown, sharesStatus, shares, targetDate, useStoreCount } = result;

                        const rankimgImages = images?.pages.map((page) => {
                            // console.log(page);
                            return page.images[resultIndex]?.items.map((item) => {
                                return item.thumbnail;
                            })
                        })

                        return (
                            <RankingBoxItem 
                                key={rank} 
                                styleType={styles.list.styleType}
                                title={title} 
                                rank={rank} 
                                gameRankUpDown={gameRankUpDown} 
                                sharesStatus={sharesStatus} 
                                shares={shares} 
                                targetDate={targetDate} 
                                useStoreCount={useStoreCount} 
                                img={rankimgImages?.[pageIndex]?.[0]} 
                                tagAs="strong" 
                                imageWidth={64} 
                                imageHeight={64}
                                imagesIsError={imagesIsError}
                            />
                        )
                    })
                })}
            </R.RankList>
            <R.RankButtonWrap>
                <B.Button 
                    type="button" 
                    typeProp="rank" 
                    disabled={rankingFetchingNextPage || !rankingHasNextPage ? true : false} 
                    onClick={() => {
                        rankingFetchNextPage();
                        imagesFetchNextPage();
                    }}
                >
                    더보기
                </B.Button>
            </R.RankButtonWrap>
        </R.RankWrap>
    )
}