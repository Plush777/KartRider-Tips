import { useQuery } from "@tanstack/react-query";
import { fetchKarts } from "scripts/api/karts";
import Tab from 'components/common/Tab';
import { tabArray } from "data/karts";
import useTab from 'hooks/useTab';

export default function Karts() {
    const { tabIndex, setTabIndex, loadData, setLoadData } = useTab(data, callback);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["karts"],
        queryFn: fetchKarts,
        staleTime: 1000 * 60 * 60 * 12, // 12시간
        gcTime: 1000 * 60 * 60 * 24, // 24시간
        retry: 1
    });

    function callback() {
        if (tabIndex === 0) {
            data && data.news.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            });
            setLoadData(data.news);
        }
        if (tabIndex === 1) setLoadData(data.devArticles);
        if (tabIndex === 2) setLoadData(data.updateArticles);
    }

    console.log(data)

    if(isLoading) return <div>로딩중...</div>

    if(isError) return <div>에러가 발생했습니다.</div>
    
    return(
        <>
            <Tab tabIndex={tabIndex} setTabIndex={setTabIndex} data={tabArray} marginBottom="15px"/>
        </>
    )
}