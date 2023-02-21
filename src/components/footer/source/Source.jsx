import FootNotice from "components/article/FootNotice";
import FootSupport from "components/article/FootSupport";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SubVisual from "components/sub/SubVisual";
import Meta from 'Meta/MetaTag';
import SourceContents from "./SourceContents";

const Source = props => {

    const metaData = {
        title: 'KartRider Tips | 출처',
        robots: 'index, follow'
    }

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id="main">
                <SubVisual/>
                <SourceContents sourceData={props.sourceData}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
        </>
    );
}

export default Source;