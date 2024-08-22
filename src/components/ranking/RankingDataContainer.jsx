import * as R from 'style/components/ranking/RankingList.style';

export default function RankingDataContainer({ styleType, shares, useStoreCount }) {
    return(
        <R.RankInnerBox direction="row" type="gameDataContainer">
            <R.RankInnerBox direction="row" type="gameData">
                <R.RankText styleType={styleType} styleProp='gameDataTitle'>점유율</R.RankText>
                <R.RankText styleType={styleType} styleProp='gameData'>{`${shares}%`}</R.RankText>
            </R.RankInnerBox>
            
            <R.RankInnerBox direction="row" type="gameData">
                <R.RankText styleType={styleType} styleProp='gameDataTitle'>PC방 수</R.RankText>
                <R.RankText styleType={styleType} styleProp='gameData'>{`${useStoreCount}개`}</R.RankText>
            </R.RankInnerBox>
        </R.RankInnerBox>
    )
}