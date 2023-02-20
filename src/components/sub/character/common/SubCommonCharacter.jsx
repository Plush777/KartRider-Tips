import SubTab from "components/sub/SubTab";
import SubVisual from "components/sub/SubVisual";
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Meta from 'Meta/MetaTag';
import FootSupport from 'components/article/FootSupport';
import Character from "components/sub/character/common/Character";
import FootNotice from "components/article/FootNotice";

const SubCommonCharacter = props => {

    const metaData = {
        title: 'KartRider Tips | 캐릭터 | 일반',
        robots: 'index, follow'
    }

    return ( 
        <>
            <Meta data={metaData}/>
            <Header/>
            <main id='main' role="main">
                <SubVisual/>
                <SubTab/>
                <Character characterCommonContents={props.characterCommonContents}/>
                <FootSupport/>
                <FootNotice/>
                <Footer/>
            </main>
        </>
    );
}

export default SubCommonCharacter;