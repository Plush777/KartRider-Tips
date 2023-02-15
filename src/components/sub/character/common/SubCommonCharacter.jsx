import SubTab from "../../SubTab";
import SubVisual from "../../SubVisual";
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import Meta from '../../../../Meta/MetaTag';
import FootSupport from '../../../article/FootSupport';
import Character from "./Character";

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
                <Footer/>
            </main>
        </>
    );
}

export default SubCommonCharacter;