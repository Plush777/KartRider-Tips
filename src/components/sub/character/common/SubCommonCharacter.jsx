import SubTab from "components/sub/SubTab";
import SubVisual from "components/sub/SubVisual";
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import Character from "components/sub/character/common/Character";
import FootNotice from "components/article/FootNotice";
import Alert from "components/mobile/Alert";
import { useSelector } from "react-redux";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";
import * as Substyled from 'components/style/common/Area.style';

const SubCommonCharacter = props => {

    const metaData = {
        title: 'KartRider Tips | 캐릭터 | 일반',
        robots: 'index, follow',
        image: '/og/og-character.jpg',
        width: '1200',
        height: '630',
    }

    let openInNewAlert = useSelector(state => state.openInNew);

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <Substyled.Main id='main'>
                <SubVisual/>
                <SubTab/>
                <Character characterCommonContents={props.characterCommonContents}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </Substyled.Main>
            <M768>
                <BottomNavigation/>
            </M768>
            {openInNewAlert && <Alert/>}
        </>
    );
}

export default SubCommonCharacter;