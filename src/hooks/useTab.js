import { useState, useEffect } from "react";

export default function useTab(data, callback) {
    let [tabIndex, setTabIndex] = useState(0);
    let [loadData, setLoadData] = useState(undefined);

    useEffect(() => {
        if (data) {
            callback(tabIndex, data, setLoadData);
        }
    }, [tabIndex, data]);

    return { tabIndex, setTabIndex, loadData, setLoadData };
}