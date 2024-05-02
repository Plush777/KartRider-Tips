import RecentYoutubeList from 'components/article/RecentYoutubeList';
import VideoState from 'components/article/VideoState';
import * as Mainstyled from 'components/style/common/Area.style';
import Select from 'components/common/Select';
import MainTitle from 'components/article/MainTitle';

const RecentYoutube = ({ sectionName, data, isLoading, isError, selectKey, setSelectKey }) => {

    return(
        <Mainstyled.MainComponentBox data-section-name={sectionName}>
            <MainTitle
                lottieName="youtube"
                lottieSrc="https://lottie.host/0fa9e3a2-0b2c-45f6-a151-86b61f917e9a/WTN6JyfSj7.lottie"
                title="최근 유튜브 영상들을 만나보세요"
                marginBottom="20px"
                right={<Select data="channels" selectKey={selectKey} setSelectKey={setSelectKey} 
                width="190px" height="36px" />}
            />
            
            <Mainstyled.MainInner minHeight="var(--mainHeightDefault)">
                {isError && <VideoState type='error' styleClassName='item3'/>}

                {
                    isLoading ? 
                    <VideoState type='loading' styleClassName='item3'/> 
                    : 
                    <RecentYoutubeList data={data} isLoading={isLoading} selectKey={selectKey} setSelectKey={setSelectKey}/>
                }
            </Mainstyled.MainInner>
        </Mainstyled.MainComponentBox>
    )
}

export default RecentYoutube;