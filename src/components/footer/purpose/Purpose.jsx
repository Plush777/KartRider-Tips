import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/sub/SubVisual";
import Meta from 'Meta/MetaTag';
import PurposeContents from "./PurposeContents";
import Alert from "components/mobile/Alert";
import { useSelector } from "react-redux";
import { M768 } from 'components/style/mobile/MediaQuery';
import BottomNavigation from "components/mobile/BottomNavigation";

const Purpose = props => {

    const metaData = {
        title: 'KartRider Tips | 사이트 목적',
        robots: 'index, follow'
    }

    let openInNewAlert = useSelector(state => state.openInNew);

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id="main">
                <SubVisual/>
                <PurposeContents purpose={props.purpose}/>
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

export default Purpose;