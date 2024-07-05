import { useState, useEffect } from "react";

export default function useTab(data, callback) {
    let [tabIndex, setTabIndex] = useState(0);
    let [loadData, setLoadData] = useState(undefined);
    let [clicked, setClicked] = useState([false,false,false,false,false]);
    
    useEffect(() => {
        callback(tabIndex, data, setLoadData);
    }, [tabIndex,data]);

    return { tabIndex, setTabIndex, clicked, setClicked, loadData, setLoadData };
}