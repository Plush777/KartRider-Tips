import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import SeasonList from 'components/article/SeasonList';
import calcSeason from "scripts/calcSeason";

const Season = () => {
    const { currentSeasonNumber, next, error } = calcSeason();

    const surffix = () => {
        if (currentSeasonNumber === 1) return 'st';
        if (currentSeasonNumber === 2) return 'nd';
        if (currentSeasonNumber === 3) return 'rd';
        
        return 'th';
    }

    const renderSeasonList = () => {
        if (next == true || !error) return <SeasonList state="seasonReady"/>
        if (error == true || !next) return <SeasonList state="error"/>
    }

    return(
        <Mainstyled.ContainerBox>
            <MainTitle 
                lottieName="season"
                lottieSrc="https://lottie.host/7a070841-534a-4caa-b524-8f84ab7411ad/yPubudtc9R.lottie"
                title={`${currentSeasonNumber}${surffix()} 등급전 ${next == true ? '준비중...' : '진행중!'}`}
                marginBottom="20px"
            />
           
            <Mainstyled.MainInner minHeight="var(--mainHeightDefault)">
                {renderSeasonList()}
            </Mainstyled.MainInner>
        </Mainstyled.ContainerBox>
    )
}

export default Season;