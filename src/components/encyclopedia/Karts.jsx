import { useQuery } from "@tanstack/react-query";
import { fetchKarts } from "scripts/api/karts";
import Tab from 'components/common/Tab';
import { tabArray } from "data/karts";
import useTab from 'hooks/useTab';
import Grid from "components/encyclopedia/Grid";

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
        if (tabIndex === 0) setLoadData('일반');
        if (tabIndex === 1) setLoadData('고급');
        if (tabIndex === 2) setLoadData('희귀');
        if (tabIndex === 3) setLoadData('영웅');
        if (tabIndex === 4) setLoadData('전설');
    }

    return(
        <div className="reset">
            <Tab 
                type="ency" 
                tabIndex={tabIndex}
                setTabIndex={setTabIndex} 
                data={tabArray} 
                marginBottom="15px"
                disabledIndex={3}
                styleProps="ency"
            />

            <Grid 
                data={data} 
                kartGradeData={loadData} 
                isLoading={isLoading}
                isError={isError}
                tabIndex={tabIndex}
            />
        </div>
    )
}