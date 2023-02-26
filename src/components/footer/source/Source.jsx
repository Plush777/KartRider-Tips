import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/sub/SubVisual";
import Meta from 'Meta/MetaTag';
import SourceContents from "./SourceContents";
import Alert from "components/mobile/Alert";
import BottomNavigation from "components/mobile/BottomNavigation";
import { useSelector } from "react-redux";
import { M768 } from 'components/style/mobile/MediaQuery';

const Source = props => {

    const metaData = {
        title: 'KartRider Tips | 출처',
        robots: 'index, follow'
    }

    let openInNewAlert = useSelector(state => state.openInNew);

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id="main">
                <SubVisual/>
                <SourceContents source={props.source}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
            <M768>
                <BottomNavigation/>
            </M768>
            {openInNewAlert && <Alert/>}
        </>
    );
}

export default Source;