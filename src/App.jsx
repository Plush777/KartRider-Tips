import React from 'react';
import GlobalStyle from './GlobalStyle';
import './font.scss';
import { useState , useEffect } from 'react';
import Loading from './components/Loading';
import Main from './components/Main';
import { Route, Routes } from "react-router-dom";
import SubSpeed from "./components/sub/speed/SubSpeed";
import SubItem from "./components/sub/item/SubItem";
import SubCommonKartbody from "./components/sub/kartbody/common/SubCommonKartbody";
import itemContentsData from './data/mode/itemMode/contents.json';
import speedContentsData from './data/mode/speedMode/contents.json';
import gnbData from './data/gnb/gnb';
import Notfound from "./components/Notfound";

const App = () => {
	let [itemContents] = useState(itemContentsData);
    let [speedContents] = useState(speedContentsData);
    let [subTitle, setSubTitle] = useState('');
    let [gnb] = useState(gnbData);
	const [loading,setLoading] = useState(true);

	useEffect(() => {
        setLoading(false);
    },[loading])

	return (
		<>
			{loading && <Loading/>}
			<GlobalStyle/>
			<Routes>
				<Route path="/" element={<Main gnb={gnb}/>}/>
				<Route path="/mode/speed" element={<SubSpeed speedContents={speedContents} subTitle={subTitle}
				setSubTitle={setSubTitle} gnb={gnb}/>}/>
				<Route path="/mode/item" element={<SubItem itemContents={itemContents} subTitle={subTitle}
				setSubTitle={setSubTitle} gnb={gnb}/>}/>
				<Route path="/kartbody/common" element={<SubCommonKartbody gnb={gnb} subTitle={subTitle}
				setSubTitle={setSubTitle}/>}/>
				<Route path="*" element={<Notfound/>} />
        	</Routes>
		</>  
	);
}

export default App;
