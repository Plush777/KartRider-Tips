import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import SubSpeed from "../components/sub/speed/SubSpeed";
import SubItem from "../components/sub/item/SubItem";
import SubCommonKartbody from "../components/sub/kartbody/common/SubCommonKartbody";
import itemContentsData from '../data/mode/itemMode/contents.json';
import speedContentsData from '../data/mode/speedMode/contents.json';
import gnbData from '../data/gnb/gnb';

const CommonRoute = () => {

    let [itemContents] = useState(itemContentsData);
    let [speedContents] = useState(speedContentsData);
    let [subTitle, setSubTitle] = useState('');
    let [gnb] = useState(gnbData);

    return ( 
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/mode/speed" element={<SubSpeed speedContents={speedContents} subTitle={subTitle}
            setSubTitle={setSubTitle} gnb={gnb}/>}/>
            <Route path="/mode/item" element={<SubItem itemContents={itemContents} subTitle={subTitle}
            setSubTitle={setSubTitle} gnb={gnb}/>}/>
            <Route path="/kartbody/common" element={<SubCommonKartbody gnb={gnb} subTitle={subTitle}
            setSubTitle={setSubTitle}/>}/>
            <Route path="*" element={<div>안돼 돌아가</div>} />
        </Routes>
     );
}

export default CommonRoute;